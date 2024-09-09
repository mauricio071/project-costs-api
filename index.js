require('dotenv').config();
const express = require('express');
const cors = require('cors')

const burguers = require('./routes/burguers')
const ingredientes = require("./routes/ingredientes")
const status = require("./routes/status")

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/ingredientes', ingredientes);
app.use('/api/status', status);
app.use('/api/burguers', burguers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});