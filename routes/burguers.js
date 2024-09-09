const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

let burguers = []

router.get("/", (req, res) => {
    return res.status(200).json(burguers);
});

router.post("/", (req, res) => {
    const novoPedido = {
        id: uuid(),
        ...req.body
    }

    burguers.push(novoPedido)
    return res.status(201).json(novoPedido)
})

router.patch("/:id", (req, res) => {
    let index = burguers.findIndex(item => item.id === req.params.id)
    burguers[index].status = req.body.status
    return res.send("Status atualizado!")
});

router.delete("/:id", (req, res) => {
    let index = burguers.findIndex(item => item.id === req.params.id)
    burguers.splice(index, 1)
    return res.send(`Pedido apagado!`)
});

module.exports = router;
