const Router = require('express');
const router = Router();
const { getAllEstados, getOneEstado } = require('../../controllers/models/estado.controller');

// Rutas Genericas

// Rutas Especificas
router.get('/', getAllEstados); // Muestra todas
router.get('/:cod_estado', getOneEstado); // Muestra una categoria

module.exports = router;
