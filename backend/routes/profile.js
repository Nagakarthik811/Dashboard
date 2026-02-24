// const express = require("express")
// const dbPromise = require("../db")
// const authMiddleware = require("../middleware/authMiddleware")

// const router = express.Router()


// router.get("/", authMiddleware, async (req, res) => {

//   const db = await dbPromise

//   const user = await db.get(
//     "SELECT id,name,email FROM users WHERE id=?",
//     req.userId
//   )

//   res.send(user)

// })

// module.exports = router


const express = require("express")
const getDB = require("../db")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/", authMiddleware, async (req, res) => {

  try {

    const db = getDB()

    const user = await db.get(
      "SELECT id, name, email FROM users WHERE id=?",
      req.userId
    )

    res.send(user)

  } catch (error) {

    console.log("Profile error:", error)

    res.status(500).send("Failed to fetch profile")

  }

})

module.exports = router