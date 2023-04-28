const Router = require('express');
const router = Router();
const { createCategoria, getAllCategorias, getOneCategoria, updateCategoria, deleteCategoria } = require('../../controllers/models/categoria.controller');

// Rutas Genericas

// Rutas Especificas
router.post('/create', createCategoria); // Crea una categoria
router.get('/', getAllCategorias); // Muestra todas
router.get('/:cod_categoria', getOneCategoria); // Muestra una categoria
router.patch('/:cod_categoria', updateCategoria); // Modifica una categoria
router.delete('/:cod_categoria', deleteCategoria); // Elimina una categoria

module.exports = router;