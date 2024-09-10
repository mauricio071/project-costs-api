const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

let contacts = []

router.get("/", (req, res) => {
    return res.status(200).json(contacts);
});
router.post("/", (req, res) => {
    const newContact = {
        id: uuid(),
        ...req.body
    }

    contacts.push(newContact)
    return res.status(201).json(newContact)
})

module.exports = router;
