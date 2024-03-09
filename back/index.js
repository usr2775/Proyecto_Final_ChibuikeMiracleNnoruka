// app.js
const express = require('express');
const dotenv = require('dotenv');
const routerProductos = require('./src/routes/index');

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('API TIENDA');
});

server.use('/api', routerProductos);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
