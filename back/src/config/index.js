const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URL);

async function connectMongoDB() {
    try {
        await client.connect();
        console.log('MongoDB conectado');
        return client;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function disconnectMongoDB() {
    try {
        await client.close();
        console.log('MongoDB desconectado');
        return client;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { connectMongoDB, disconnectMongoDB };