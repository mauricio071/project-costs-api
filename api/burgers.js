const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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

let status = [
    { id: 1, tipo: 'Solicitado' },
    { id: 2, tipo: 'Em produção' },
    { id: 3, tipo: 'Finalizado' },
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Make Your Burger está funcionando!');
});

app.get('/api/ingredientes', (req, res) => {
    res.json(ingredientes);
});

app.get('/api/status', (req, res) => {
    res.json(status);
});

app.post('/api/burgers', (req, res) => {
    const { pao, carne, opcionais, statusId } = req.body;

    if (!pao || !carne || !statusId) {
        return res.status(400).json({ error: 'Por favor, forneça todos os campos obrigatórios: pao, carne e status.' });
    }

    const newBurger = {
        id: burgers.length + 1,
        pao,
        carne,
        opcionais: opcionais || [],
        statusId,
    };

    burgers.push(newBurger);
    res.status(201).json(newBurger);
});

app.get('/api/burgers', (req, res) => {
    res.json(burgers);
});

app.put('/api/burgers/:id/status', (req, res) => {
    const burgerId = parseInt(req.params.id);
    const { statusId } = req.body;

    const burger = burgers.find(b => b.id === burgerId);
    if (!burger) return res.status(404).json({ error: 'Burger não encontrado' });

    burger.statusId = statusId;
    res.json(burger);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});