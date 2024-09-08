require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const burguers = require('./routes/burguers')
const ingredientes = require("./routes/ingredientes")
const status = require("./routes/status")

const app = express();
app.use(express.json());

app.use('/api/ingredientes', ingredientes);
app.use('/api/status', status);
app.use('/api/burguers', burguers);

const PORT = process.env.PORT || 3000;
const MONGOOSE_CONNECT = process.env.MONGOOSE_CONNECT

app.listen(PORT, () => {
    mongoose.connect(MONGOOSE_CONNECT)

    console.log(`Servidor rodando na porta ${PORT}`);
});