const express = require("express");
const connectToDatabase = require('../db');
const router = express.Router();
const mongoose = require('mongoose');

const Burguer = mongoose.model('Burguer', {
    nome: String,
    pao: String,
    carne: String,
    opcionais: Array,
    status: String
});

router.get("/", async (req, res) => {
    await connectToDatabase();
    const burguers = await Burguer.find();
    return res.send(burguers);
});

router.post("/", async (req, res) => {
    await connectToDatabase();
    const burguer = new Burguer({
        nome: req.body.nome,
        pao: req.body.pao,
        carne: req.body.carne,
        opcionais: req.body.opcionais,
        status: req.body.status
    });

    await burguer.save();
    return res.send(burguer);
});

router.put("/:id", async (req, res) => {
    await connectToDatabase();
    const burguer = await Burguer.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        pao: req.body.pao,
        carne: req.body.carne,
        opcionais: req.body.opcionais,
        status: req.body.status
    }, {
        new: true
    });

    return res.send(burguer);
});

router.delete("/:id", async (req, res) => {
    await connectToDatabase();
    const burguer = await Burguer.findByIdAndDelete(req.params.id);
    return res.send(burguer);
});

module.exports = router;
