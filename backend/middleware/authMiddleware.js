const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {

  try {

    const token = req.headers.authorization

    if (!token) {
      return res.status(401).send("Token missing")
    }

    const decoded = jwt.verify(token, "SECRET_KEY")

    req.userId = decoded.id

    next()

  } catch (error) {

    console.log("Auth error:", error)

    res.status(500).send("Invalid token")

  }

}

module.exports = authMiddleware