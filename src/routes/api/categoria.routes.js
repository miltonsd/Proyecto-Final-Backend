const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Categoria } = require('../../database/models/index');
const {} = require('../../controllers/models/categoria.controller');

// Rutas Genericas

/**
 * @swagger
 * /categorias/create:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags:
 *       - Categorías
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descripcion
 *             properties:
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor 
 */
router.post('/create', createOne(Categoria)); // Crea una categoria

/**
 * @swagger
 * /categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en el servidor 
 */
router.get('/:id', getOne(Categoria)); // Muestra una categoria

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Obtiene todas las categorías
 *     tags:
 *       - Categorías
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categorías no encontradas
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAll(Categoria)); // Muestra todas

/**
 * @swagger
 * /categorias/{id}:
 *   patch:
 *     summary: Actualiza una categoría existente
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateOne(Categoria)); // Modifica una categoria

/**
 * @swagger
 * /categorias/{id}:
 *   delete:
 *     summary: Elimina una categoría (soft delete)
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en el servidor 
 */
router.delete('/:id', deleteOne(Categoria)); // Elimina una categoria

module.exports = router;