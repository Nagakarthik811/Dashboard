const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const getDB = require("../db")

const router = express.Router()

router.post("/signup", async (req, res) => {

  try {

    console.log("Signup called")
    console.log(req.body)

    const { name, email, password } = req.body

    const db = getDB()

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.run(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    )

    res.send("User created successfully")

  } catch (error) {

    console.log("Signup error:", error)

    res.status(500).send("Signup failed")

  }

})


router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const db = getDB()

    const user = await db.get(
      "SELECT * FROM users WHERE email=?",
      email
    )

    if (!user) {
      return res.status(400).send("User not found")
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      return res.status(400).send("Invalid password")
    }

    const token = jwt.sign(
      { id: user.id },
      "SECRET_KEY"
    )

    res.send({ token })

  } catch (error) {

    console.log(error)
    res.status(500).send("Login failed")

  }

})

module.exports = router