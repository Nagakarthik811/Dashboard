const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

let db = null

const initializeDB = async () => {

  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  })

  await db.exec(`
  
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      title TEXT,
      description TEXT
    );

  `)

  console.log("Database initialized successfully")
}

initializeDB()

const getDB = () => db

module.exports = getDB