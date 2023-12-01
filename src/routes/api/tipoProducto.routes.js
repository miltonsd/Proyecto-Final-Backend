const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne } = require('../../controllers/generico.controller');
const { TipoProducto } = require('../../database/models/index');
const { deleteTipoProducto } = require('../../controllers/models/tipoProducto.controller');

// Rutas Genericas
router.get('/', getAll(TipoProducto)); // Muestra todos
router.get('/:id', getOne(TipoProducto)); // Muestra un tipoProducto
router.post('/create', createOne(TipoProducto)); // Crea un tipoProducto
router.patch('/:id', updateOne(TipoProducto)); // Modifica un tipoProducto

// Rutas Especificas
router.delete('/:id', deleteTipoProducto) // Elimina un tipoProducto

module.exports = router;