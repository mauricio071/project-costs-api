const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

let burguers = []

router.get("/", async (req, res) => {
    return res.status(200).json(burguers);
});

router.post("/", async (req, res) => {
    const novoPedido = {
        id: uuid(),
        ...req.body
    }

    burguers.push(novoPedido)
    return res.status(201).send("Burguer salvo!")
})

router.patch("/:id", async (req, res) => {
    let index = burguers.findIndex(item => item.id === req.params.id)
    burguers[index].status = req.body.status
    res.json("Status atualizado")
});

router.delete("/:id", async (req, res) => {
    let index = burguers.findIndex(item => item.id === req.params.id)
    burguers.splice(index, 1)
    return res.send(`Pedido apagado!`)
});

module.exports = router;
