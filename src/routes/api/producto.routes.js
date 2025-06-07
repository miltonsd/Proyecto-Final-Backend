const Router = require('express');
const router = Router();
const { createOne, updateOne } = require('../../controllers/generico.controller');
const { Producto } = require('../../database/models/index');
const { getAllProductos, getOneProducto, deleteProducto } = require('../../controllers/models/producto.controller');

// Rutas Genericas

/**
 * @swagger
 * /productos/create:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - precio
 *               - stock
 *               - descripcion
 *               - detalle
 *               - imagen
 *             properties:
 *               precio:
 *                 type: number
 *                 format: float
 *               stock:
 *                 type: integer
 *               descripcion:
 *                 type: string
 *                 maxLength: 50
 *               detalle:
 *                 type: string
 *                 maxLength: 250
 *               imagen:
 *                 type: string
 *                 format: uri
 *               id_tipoProducto:
 *                 type: integer
 *                 description: ID del tipo de producto (opcional, por defecto es 1)
 *     responses:
 *       200:
 *         description: Producto creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Producto creado correctamente.
 *                 producto:
 *                   $ref: '#/components/schemas/Producto'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createOne(Producto)); // Crea un producto

/**
 * @swagger
 * /productos/{id}:
 *   patch:
 *     summary: Edita un producto existente
 *     tags:
 *       - Productos
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del producto a editar
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
 *               precio:
 *                 type: number
 *                 format: float
 *               stock:
 *                 type: integer
 *               descripcion:
 *                 type: string
 *                 maxLength: 50
 *               detalle:
 *                 type: string
 *                 maxLength: 250
 *               imagen:
 *                 type: string
 *                 format: uri
 *               id_tipoProducto:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto editado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 elemento:
 *                   $ref: '#/components/schemas/Producto'
 *                 msg:
 *                   type: string
 *                   example: Producto editado correctamente.
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateOne(Producto)); // Modifica un producto

// Rutas Especificas

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del producto a obtener
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOneProducto); // Muestra un producto

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Productos no encontrados
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllProductos); // Muestra todos

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del producto a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Producto eliminado correctamente.
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteProducto); // Elimina un producto

module.exports = router;