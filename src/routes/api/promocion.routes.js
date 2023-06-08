const Router = require('express');
const router = Router();
const { createOne, updateOne } = require('../../controllers/generico.controller');
const { Promocion } = require('../../database/models/index');
const { getAllPromociones, getOnePromocion, /*createpromocion,*/ deletePromocion } = require('../../controllers/models/promocion.controller');

// Rutas Genericas
router.post('/create', createOne(Promocion)); // Crea una promocion
router.patch('/:id', updateOne(Promocion)); // Modifica una promocion

// Rutas Especificas
router.get('/', getAllPromociones); // Muestra todas
router.get('/:id', getOnePromocion); // Muestra una promocion
router.delete('/:id', deletePromocion); // Elimina una promocion

module.exports = router;