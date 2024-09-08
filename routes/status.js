
const express = require("express")
const router = express.Router();

let status = [
    { id: 1, tipo: 'Solicitado' },
    { id: 2, tipo: 'Em produção' },
    { id: 3, tipo: 'Finalizado' },
];

router.get("/", async (req, res, next) => {
    return res.status(200).json(status)
})

router.post("/", async (req, res) => {
    status.push(req.body)
    return res.status(201).send("sucesso")
})

module.exports = router;