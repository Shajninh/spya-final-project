const { createContact, getAllContacts } = require("../models/contactModel");

function listContacts(req,res){
    return res.json(getAllContacts());
}

function addContact(req,res){
    const{first_Name,last_name,email,phone,username,password,sport1,sport2,sport3} = req.body || {};
        if(!first_Name || !last_name || !email || !phone || !username || !password || !sport1 || !sport2 || !sport3){
            return res.status(400).json({
                error: "All fields are required"
            });
        }
        const id = createContact(first_Name,last_name,email,phone, username, password, sport1, sport2, sport3)
        return res.status(201).json({id,first_Name,last_name,email,phone, username, password, sport1, sport2, sport3});
    };

module.exports = { listContacts, addContact };