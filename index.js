require('dotenv').config();
const express = require('express');
const cors = require('cors')

const projects = require('./routes/projects')
const categories = require("./routes/categories")
const contacts = require("./routes/contacts")

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projects);
app.use('/api/categories', categories);
app.use('/api/contacts', contacts);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});