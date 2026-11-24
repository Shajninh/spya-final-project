const {DatabaseSync} = require("node:sqlite");
const db = new DatabaseSync("sports.db");

db.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            sport TEXT NOT NULL
        )
    `);

module.exports = db;