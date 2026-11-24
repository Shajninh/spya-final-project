const db = require('../config/dbConnect');

const SportModel = {
  // Fetch all saved entries
  getAll: () => {
    const stmt = db.prepare('SELECT id, name AS userName, sport FROM users ORDER BY id ASC');
    return stmt.all();
  },

  // Insert a new user name + sport
  create: (userName, sport) => {
    const stmt = db.prepare('INSERT INTO users (name, sport) VALUES (?, ?)');
    const result = stmt.run(userName, sport);
    return {
      id: Number(result.lastInsertRowid),
      userName,
      sport
    };
  },

  // Delete an entry by ID
  deleteById: (id) => {
    const stmt = db.prepare('DELETE FROM users WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }
};

module.exports = SportModel;