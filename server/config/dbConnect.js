const {DatabaseSync} = require("node:sqlite");
const db = new DatabaseSync("contacts.db");

db.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            sport1 TEXT NOT NULL,
            sport2 TEXT,
            sport3 TEXT
        )
    `);

module.exports = db;