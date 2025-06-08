const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Rol } = require('../../database/models/index');
const {} = require('../../controllers/models/rol.controller');

// Rutas Genericas

/**
 * @swagger
 * /roles/create:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags:
 *       - Roles
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
 *                 maxLength: 50
 *     responses:
 *       200:
 *         description: Rol creado correctamente
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createOne(Rol)); // Crea un rol

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Obtiene un rol por ID
 *     tags:
 *       - Roles
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_rol:
 *                   type: integer
 *                 descripcion:
 *                   type: string
 *       404:
 *         description: No hay datos
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOne(Rol)); // Muestra un rol

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_rol:
 *                     type: integer
 *                   descripcion:
 *                     type: string
 *       404:
 *         description: No hay datos
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAll(Rol)); // Muestra todos

/**
 * @swagger
 * /roles/{id}:
 *   patch:
 *     summary: Edita un rol existente
 *     tags:
 *       - Roles
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
 *     responses:
 *       201:
 *         description: Rol editado correctamente
 *       404:
 *         description: Elemento no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateOne(Rol)); // Modifica un rol

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Elimina un rol por ID
 *     tags:
 *       - Roles
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol eliminado correctamente
 *       404:
 *         description: Elemento no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteOne(Rol)); // Elimina un rol

module.exports = router;