const express = require("express");
const router = express.Router();
// const {createContact, getAllContacts} = require("../models/contactModel")
const controller = require("../controller/contactController")

router.route("/")
    .get(controller.listContacts)
    .post(controller.addContact)
    .put((req,res)=>res.send("Update a contact"))
    .delete((req,res)=>res.send("Delete a contact"))

router.route("/:id")
    .get((req,res)=>{
        res.send(`Display a contact for ID ${req.params.id}`);
    })
    .post((req,res)=>{
        res.send(`Add a contact for ID ${req.params.id}`);
    })
    .put((req,res)=>{
        res.send(`Place a contact for ID ${req.params.id}`);
    })
    .delete((req,res)=>{
        res.send(`Delete a contact for ID ${req.params.id}`);
    });

module.exports = router;