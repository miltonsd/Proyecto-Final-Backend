const Router = require('express');
const router = Router();
const { getAll, getOne } = require('../../controllers/generico.controller');
const { Estado } = require('../../database/models/index')
const { getAllEstados, getOneEstado } = require('../../controllers/models/estado.controller');

// Rutas Genericas
router.get('/', getAll(Estado)); // Muestra todos los estados
router.get('/:id', getOne(Estado)); // Muestra un estado

// Rutas Especificas

module.exports = router;