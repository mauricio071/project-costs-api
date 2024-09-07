const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let burgers = [];

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

let statusOptions = [
    { id: 1, tipo: 'Solicitado' },
    { id: 2, tipo: 'Em produção' },
    { id: 3, tipo: 'Finalizado' },
];

app.get('/burgers', (req, res) => res.json(burgers));
app.post('/burgers', (req, res) => {
    const newBurger = { id: burgers.length + 1, ...req.body };
    burgers.push(newBurger);
    res.status(201).json(newBurger);
});
app.put('/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const burgerIndex = burgers.findIndex(b => b.id === id);
    if (burgerIndex !== -1) {
        burgers[burgerIndex] = { id, ...req.body };
        res.json(burgers[burgerIndex]);
    } else {
        res.status(404).send('Burger não encontrado');
    }
});
app.delete('/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    burgers = burgers.filter(b => b.id !== id);
    res.status(204).send();
});

app.get('/ingredientes', (req, res) => res.json(ingredientes));

app.get('/status', (req, res) => res.json(statusOptions));

module.exports = app;
