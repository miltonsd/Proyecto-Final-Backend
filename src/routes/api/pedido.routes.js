const Router = require('express');
const router = Router();
//const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Pedido } = require('../../database/models/index');
const { getAllPedidos, getOnePedido, createPedido, updatePedido, deletePedido } = require('../../controllers/models/pedido.controller');

// Rutas Genericas



// Rutas Especificas
router.get('/', getAllPedidos); // Muestra todos
router.get('/:id', getOnePedido); // Muestra un pedido
router.post('/create', createPedido); // Crea un pedido
router.patch('/:id', updatePedido); // Modifica un pedido
router.delete('/:id', deletePedido); // Elimina un pedido

module.exports = router;