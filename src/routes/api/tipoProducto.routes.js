const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne } = require('../../controllers/generico.controller');
const { TipoProducto } = require('../../database/models/index');
const { deleteTipoProducto } = require('../../controllers/models/tipoProducto.controller');

// Rutas Genericas

/**
 * @swagger
 * /tiposProducto/create:
 *   post:
 *     summary: Crea un nuevo tipo de producto
 *     tags:
 *       - TiposProducto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descripcion
 *               - imagen
 *             properties:
 *               descripcion:
 *                 type: string
 *                 maxLength: 50
 *               imagen:
 *                 type: string
 *                 maxLength: 250
 *     responses:
 *       200:
 *         description: Tipo de producto creado correctamente
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createOne(TipoProducto)); // Crea un tipoProducto

/**
 * @swagger
 * /tiposProducto/{id}:
 *   get:
 *     summary: Obtiene un tipo de producto por ID
 *     tags:
 *       - TiposProducto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_tipoProducto:
 *                   type: integer
 *                 descripcion:
 *                   type: string
 *                 imagen:
 *                   type: string
 *       404:
 *         description: No hay datos
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOne(TipoProducto)); // Muestra un tipoProducto

/**
 * @swagger
 * /tiposProducto:
 *   get:
 *     summary: Obtiene todos los tipos de producto
 *     tags:
 *       - TiposProducto
 *     responses:
 *       200:
 *         description: Lista de tipos de producto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_tipoProducto:
 *                     type: integer
 *                   descripcion:
 *                     type: string
 *                   imagen:
 *                     type: string
 *       404:
 *         description: No hay datos
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAll(TipoProducto)); // Muestra todos

/**
 * @swagger
 * /tiposProducto/{id}:
 *   patch:
 *     summary: Edita un tipo de producto existente
 *     tags:
 *       - TiposProducto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *               imagen:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de producto editado correctamente
 *       404:
 *         description: Elemento no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateOne(TipoProducto)); // Modifica un tipoProducto

// Rutas Especificas

/**
 * @swagger
 * /tiposProducto/{id}:
 *   delete:
 *     summary: Elimina un tipo de producto por ID
 *     tags:
 *       - TiposProducto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de producto eliminado correctamente
 *       404:
 *         description: Tipo producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteTipoProducto) // Elimina un tipoProducto

module.exports = router;