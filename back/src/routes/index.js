const express = require('express');
const router = express.Router();
const productosController = require('../controller/index');

router.get('/productos', productosController.getAll);

// Si planeas usar esta ruta, descoméntala y define la función correspondiente
// router.post('/productos')

module.exports = router;