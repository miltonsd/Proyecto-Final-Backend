const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Categoria } = require('../../database/models/index');
const { createCategoria, getAllCategorias, getOneCategoria, updateCategoria, deleteCategoria } = require('../../controllers/models/categoria.controller');


// Rutas Genericas
router.get('/', getAll(Categoria)); // Muestra todas
router.get('/:cod_categoria', getOne(Categoria)); // Muestra una categoria
router.post('/create', createOne(Categoria)); // Crea una categoria
router.patch('/:cod_categoria', updateOne(Categoria)); // Modifica una categoria
router.delete('/:cod_categoria', deleteOne(Categoria)); // Elimina una categoria

// Rutas Especificas

module.exports = router;