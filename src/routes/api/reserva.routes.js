const Router = require('express');
const router = Router();
const { createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Reserva } = require('../../database/models/index');
const { getAllReservas, getOneReserva } = require('../../controllers/models/reserva.controller');

// Rutas Genericas

/**
 * @swagger
 * /reservas/create:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags:
 *       - Reservas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fechaHora
 *               - cant_personas
 *               - id_usuario
 *               - id_mesa
 *             properties:
 *               fechaHora:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-08T20:00:00Z"
 *               cant_personas:
 *                 type: integer
 *               isPendiente:
 *                 type: boolean
 *                 example: true
 *               id_usuario:
 *                 type: integer
 *               id_mesa:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Reserva creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Reserva creada correctamente.
 *                 elemento:
 *                   $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createOne(Reserva)); // Crea una reserva

/**
 * @swagger
 * /reservas/{id}:
 *   patch:
 *     summary: Edita una reserva existente
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fechaHora:
 *                 type: string
 *                 format: date-time
 *               cant_personas:
 *                 type: integer
 *               isPendiente:
 *                 type: boolean
 *               id_usuario:
 *                 type: integer
 *               id_mesa:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Reserva editada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Reserva editada correctamente.
 *                 elemento:
 *                   $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateOne(Reserva)); // Modifica una reserva

/**
 * @swagger
 * /reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 elemento:
 *                   $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteOne(Reserva)); // Elimina una reserva

// Rutas Especificas

/**
 * @swagger
 * /reservas/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_reserva:
 *                   type: integer
 *                 fechaHora:
 *                   type: string
 *                   format: date-time
 *                 cant_personas:
 *                   type: integer
 *                 isPendiente:
 *                   type: boolean
 *                 Usuario:
 *                   type: object
 *                   properties:
 *                     id_usuario:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     email:
 *                       type: string
 *                 Mesa:
 *                   type: object
 *                   properties:
 *                     id_mesa:
 *                       type: integer
 *                     ubicacion:
 *                       type: string
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOneReserva); // Muestra una reserva

/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Obtiene todas las reservas
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_reserva:
 *                     type: integer
 *                   fechaHora:
 *                     type: string
 *                     format: date-time
 *                   cant_personas:
 *                     type: integer
 *                   isPendiente:
 *                     type: boolean
 *                   Usuario:
 *                     type: object
 *                     properties:
 *                       id_usuario:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                       email:
 *                         type: string
 *                   Mesa:
 *                     type: object
 *                     properties:
 *                       id_mesa:
 *                         type: integer
 *                       ubicacion:
 *                         type: string
 *       404:
 *         description: Reservas no encontradas
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllReservas); // Muestra todas

module.exports = router;