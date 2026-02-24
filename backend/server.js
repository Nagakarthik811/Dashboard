const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const taskRoutes = require("./routes/tasks")
const profileRoutes = require("./routes/profile")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/tasks", taskRoutes)
app.use("/profile", profileRoutes)

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})