const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne } = require('../../controllers/generico.controller');
const { Promocion } = require('../../database/models/index');
const { deletePromocion } = require('../../controllers/models/promocion.controller');

// Rutas Genericas
router.get('/', getAll(Promocion)); // Muestra todas
router.get('/:id', getOne(Promocion)); // Muestra una promocion
router.post('/create', createOne(Promocion)); // Crea una promocion
router.patch('/:id', updateOne(Promocion)); // Modifica una promocion

// Rutas Especificas
router.delete('/:id', deletePromocion); // Elimina una promocion

module.exports = router;