const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { TipoProducto } = require('../../database/models/index');

// Rutas Genericas
router.get('/', getAll(TipoProducto)); // Muestra todos
router.get('/:id', getOne(TipoProducto)); // Muestra un tipoProducto
router.post('/create', createOne(TipoProducto)); // Crea un tipoProducto
router.patch('/:id', updateOne(TipoProducto)); // Modifica un tipoProducto
router.delete('/:id', deleteOne(TipoProducto)); // Elimina un tipoProducto

// Rutas Especificas

module.exports = router;