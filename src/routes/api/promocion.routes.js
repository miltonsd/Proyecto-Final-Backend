const Router = require('express');
const router = Router();
const { Promocion } = require('../../database/models/index');
const { getAllPromociones, getOnePromocion, createPromocion, deletePromocion, updatePromocion } = require('../../controllers/models/promocion.controller');

// Rutas Genericas

// Rutas Especificas
router.post('/create', createPromocion); // Crea una promocion
router.get('/', getAllPromociones); // Muestra todas
router.get('/:id', getOnePromocion); // Muestra una promocion
router.patch('/:id', updatePromocion); // Modifica una promocion
router.delete('/:id', deletePromocion); // Elimina una promocion

module.exports = router;