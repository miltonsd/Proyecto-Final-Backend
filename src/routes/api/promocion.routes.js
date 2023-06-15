const Router = require('express');
const router = Router();
const { updateOne } = require('../../controllers/generico.controller');
const { Promocion } = require('../../database/models/index');
const { getAllPromociones, getOnePromocion, createPromocion, deletePromocion } = require('../../controllers/models/promocion.controller');

// Rutas Genericas
router.patch('/:id', updateOne(Promocion)); // Modifica una promocion

// Rutas Especificas
router.post('/create', createPromocion); // Crea una promocion
router.get('/', getAllPromociones); // Muestra todas
router.get('/:id', getOnePromocion); // Muestra una promocion
router.delete('/:id', deletePromocion); // Elimina una promocion

module.exports = router;