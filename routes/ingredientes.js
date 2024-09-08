const express = require("express");
const router = express.Router();

let ingredientes = {
    paes: [
        { id: 1, tipo: 'Italiano Branco' },
        { id: 2, tipo: '3 Queijos' },
        { id: 3, tipo: 'Parmesão e Orégano' },
        { id: 4, tipo: 'Integral' },
    ],
    carnes: [
        { id: 1, tipo: 'Maminha' },
        { id: 2, tipo: 'Alcatra' },
        { id: 3, tipo: 'Picanha' },
        { id: 4, tipo: 'Veggie burger' },
    ],
    opcionais: [
        { id: 1, tipo: 'Bacon' },
        { id: 2, tipo: 'Cheddar' },
        { id: 3, tipo: 'Salame' },
        { id: 4, tipo: 'Tomate' },
        { id: 5, tipo: 'Cebola roxa' },
        { id: 6, tipo: 'Pepino' },
    ],
};

router.get("/", async (req, res, next) => {
    return res.status(200).json(ingredientes);
});

module.exports = router;