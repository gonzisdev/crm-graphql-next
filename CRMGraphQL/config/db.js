const mongoose = require('mongoose');
require('dotenv').config({ path: 'variiables.env' });

async function conectarDB() {
    try {
        const connection = await mongoose.connect(process.env.DB_MONGO);

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = conectarDB;


