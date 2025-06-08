const Router = require('express');
const router = Router();
const { getAllPromociones, getOnePromocion, createPromocion, deletePromocion, updatePromocion } = require('../../controllers/models/promocion.controller');

// Rutas Especificas

/**
 * @swagger
 * /promociones/create:
 *   post:
 *     summary: Crea una nueva promoción
 *     tags:
 *       - Promociones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - porcentaje_desc
 *               - fecha_desde
 *               - fecha_hasta
 *               - lista_productos
 *             properties:
 *               porcentaje_desc:
 *                 type: number
 *               fecha_desde:
 *                 type: string
 *                 format: date
 *               fecha_hasta:
 *                 type: string
 *                 format: date
 *               lista_productos:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Promoción creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Promoción creada correctamente.
 *                 promocion:
 *                   $ref: '#/components/schemas/Promocion'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createPromocion); // Crea una promocion

/**
 * @swagger
 * /promociones/{id}:
 *   get:
 *     summary: Obtiene una promoción por ID
 *     tags:
 *       - Promociones
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la promoción
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Promoción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promocion'
 *       404:
 *         description: Promoción no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOnePromocion); // Muestra una promocion

/**
 * @swagger
 * /promociones:
 *   get:
 *     summary: Obtiene todas las promociones
 *     tags:
 *       - Promociones
 *     responses:
 *       200:
 *         description: Lista de promociones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Promocion'
 *       404:
 *         description: Promociones no encontradas
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllPromociones); // Muestra todas

/**
 * @swagger
 * /promociones/{id}:
 *   patch:
 *     summary: Actualiza parcialmente una promoción
 *     tags:
 *       - Promociones
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la promoción
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               porcentaje_desc:
 *                 type: number
 *                 example: 10
 *               fecha_desde:
 *                 type: string
 *                 format: date
 *               fecha_hasta:
 *                 type: string
 *                 format: date
 *               lista_productos:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       201:
 *         description: Promoción editada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Promoción editada correctamente.
 *                 prom:
 *                   $ref: '#/components/schemas/Promocion'
 *       404:
 *         description: Promoción no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updatePromocion); // Modifica una promocion

/**
 * @swagger
 * /promociones/{id}:
 *   delete:
 *     summary: Elimina una promoción por ID
 *     tags:
 *       - Promociones
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la promoción
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Promoción eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Promoción eliminada correctamente.
 *       404:
 *         description: Promoción no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deletePromocion); // Elimina una promocion

module.exports = router;