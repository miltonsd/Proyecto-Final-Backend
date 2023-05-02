const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Categoria } = require('../../database/models/index');
const {} = require('../../controllers/models/categoria.controller');

// Rutas Genericas
router.get('/', getAll(Categoria)); // Muestra todas
router.get('/:id', getOne(Categoria)); // Muestra una categoria
router.post('/create', createOne(Categoria)); // Crea una categoria
router.patch('/:id', updateOne(Categoria)); // Modifica una categoria
router.delete('/:id', deleteOne(Categoria)); // Elimina una categoria

// Rutas Especificas

module.exports = router;