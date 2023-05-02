const Router = require('express');
const router = Router();
const { createOne, updateOne } = require('../../controllers/generico.controller');
const { Producto } = require('../../database/models/index');
const { getAllProductos, getOneProducto, deleteProducto } = require('../../controllers/models/producto.controller');

// Rutas Genericas
router.post('/create', createOne(Producto)); // Crea un producto
router.patch('/:id', updateOne(Producto)); // Modifica un producto

// Rutas Especificas
router.get('/', getAllProductos); // Muestra todos
router.get('/:id', getOneProducto); // Muestra un producto
router.delete('/:id', deleteProducto); // Elimina un producto

module.exports = router;