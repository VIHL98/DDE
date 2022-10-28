const express = require('express');
const router = express.Router();
const CentroController = require('../controller/centroController');

router.post('/',CentroController.CrearCentro);
router.get('/',CentroController.ObtenerCentro);

module.exports = router;