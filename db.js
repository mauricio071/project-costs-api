require('dotenv').config();
const mongoose = require('mongoose');
const MONGOOSE_CONNECT = process.env.MONGOOSE_CONNECT

let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(MONGOOSE_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = db.connections[0].readyState;
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

module.exports = connectToDatabase;
