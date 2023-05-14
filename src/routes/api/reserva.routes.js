const Router = require('express');
const router = Router();
const { createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Reserva } = require('../../database/models/index');
const { getAllReservas, getOneReserva } = require('../../controllers/models/reserva.controller');

// Rutas Genericas
router.post('/create', createOne(Reserva)); // Crea una reserva
router.patch('/:id', updateOne(Reserva)); // Modifica una reserva
router.delete('/:id', deleteOne(Reserva)); // Elimina una reserva

// Rutas Especificas
router.get('/', getAllReservas); // Muestra todas
router.get('/:id', getOneReserva); // Muestra una reserva

module.exports = router;