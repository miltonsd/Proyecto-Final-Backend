const Router = require('express');
const router = Router();
const { createMesa, /*habilitarMesa */ /*deshabilitarMesa */ getAllMesas, getOneMesa, updateMesa, deleteOneMesa } = require('../../controllers/models/mesa.controller');

// Rutas Genericas

// Rutas Especificas
router.post('/create', createMesa); // Crea una mesa
// router.post('/habilitar', habilitarMesa);
// router.post('/deshabilitar', deshabilitarMesa);
router.get('/', getAllMesas); // Muestra todas
router.get('/:id', getOneMesa); // Muestra una mesa
router.patch('/:id', updateMesa); // Modifica una mesa
router.delete('/:id', deleteOneMesa); // Elimina una mesa

module.exports = router;