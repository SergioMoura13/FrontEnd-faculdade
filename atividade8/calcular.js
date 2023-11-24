const express = require('express');
const router = express.Router();
const calcularController = require('../controller/calcularController');

router.post('/', calcularController.calcular);

module.exports = router;
