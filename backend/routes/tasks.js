const express = require("express")
const getDB = require("../db")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()


// GET TASKS
router.get("/", authMiddleware, async (req, res) => {

  try {

    const db = getDB()

    const tasks = await db.all(
      "SELECT * FROM tasks WHERE user_id=?",
      req.userId
    )

    res.send(tasks)

  } catch (error) {

    console.log("Fetch tasks error:", error)

    res.status(500).send("Failed to fetch tasks")

  }

})


// ADD TASK
router.post("/", authMiddleware, async (req, res) => {

  try {

    const { title, description } = req.body

    const db = getDB()

    await db.run(
      "INSERT INTO tasks (user_id,title,description) VALUES (?,?,?)",
      [req.userId, title, description]
    )

    res.send("Task added")

  } catch (error) {

    console.log("Add task error:", error)

    res.status(500).send("Failed to add task")

  }

})

// DELETE TASK
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    const db = getDB()

    const taskId = req.params.id

    await db.run(
      "DELETE FROM tasks WHERE id=? AND user_id=?",
      [taskId, req.userId]
    )

    res.send("Task deleted")

  } catch (error) {

    console.log("Delete task error:", error)

    res.status(500).send("Failed to delete task")

  }

})


// UPDATE TASK
router.put("/:id", authMiddleware, async (req, res) => {

  try {

    const db = getDB()

    const taskId = req.params.id

    const { title, description } = req.body

    await db.run(
      "UPDATE tasks SET title=?, description=? WHERE id=? AND user_id=?",
      [title, description, taskId, req.userId]
    )

    res.send("Task updated")

  } catch (error) {

    console.log("Update task error:", error)

    res.status(500).send("Failed to update task")

  }

})


module.exports = router