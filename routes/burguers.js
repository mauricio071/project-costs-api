const express = require("express")
const mongoose = require('mongoose')
const router = express.Router();

const Burguer = mongoose.model('Burguer', {
    nome: String,
    pao: String,
    carne: String,
    opcionais: Array,
    status: String
})

router.get("/", async (req, res) => {
    const burguers = await Burguer.find()
    return res.send(burguers)
})

router.post("/", async (req, res) => {
    const burguer = new Burguer({
        nome: req.body.nome,
        pao: req.body.pao,
        carne: req.body.carne,
        opcionais: req.body.opcionais,
        status: req.body.status
    })

    await burguer.save()
    return res.send(burguer)
})

router.put("/:id", async (req, res) => {
    const burguer = await Burguer.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        pao: req.body.pao,
        carne: req.body.carne,
        opcionais: req.body.opcionais,
        status: req.body.status
    }, {
        new: true
    })

    return res.send(burguer)
})

router.delete("/:id", async (req, res) => {
    const burguer = await Burguer.findByIdAndDelete(req.params.id)
    return res.send(burguer)
})

module.exports = router;