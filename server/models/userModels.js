const db = require("../config/dbConnect");

function createUser(first_name, last_name,email,phone,username,password,sport1,sport2,sport3){
    db.prepare(`
        INSERT INTO users (first_name, last_name,email,phone,username,password,sport1,sport2,sport3)
        VALUES (?,?,?,?,?,?,?,?,?)
        `).run(first_name, last_name,email,phone,username,password,sport1,sport2,sport3)
}

function getAllUsers(){
    return db.prepare("SELECT * FROM contacts").all();
}

module.exports = {createUser, getAllUsers};