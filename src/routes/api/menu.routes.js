const Router = require('express');
const router = Router();
const { createMenu, getAllMenues, getOneMenu,  deleteMenu, updateMenu } = require('../../controllers/models/menu.controller');

// Rutas Especificas

/**
 * @swagger
 * /menues/create:
 *   post:
 *     summary: Crea un nuevo menú con productos asociados
 *     tags:
 *       - Menúes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - id_usuario
 *               - lista_productos
 *             properties:
 *               titulo:
 *                 type: string
 *               id_usuario:
 *                 type: integer
 *               lista_productos:
 *                 type: array
 *                 description: Lista de IDs de productos asociados al menú
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Menú creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Menú creado correctamente.
 *                 menu:
 *                   $ref: '#/components/schemas/Menu'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', createMenu); // Crea un Menu

/**
 * @swagger
 * /menues/{id}:
 *   get:
 *     summary: Obtiene un menú por ID, incluyendo usuario y productos asociados
 *     tags:
 *       - Menúes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del menú a consultar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Menú encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_menu:
 *                   type: integer
 *                 titulo:
 *                   type: string
 *                 Usuario:
 *                   type: object
 *                   description: Usuario creador del menú
 *                   properties:
 *                     id_usuario:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     email:
 *                       type: string
 *                 Productos:
 *                   type: array
 *                   description: Lista de productos incluidos en el menú
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_producto:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                       precio:
 *                         type: number
 *                         format: float
 *       404:
 *         description: Menú no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getOneMenu); // Muestra un menu

/**
 * @swagger
 * /menues:
 *   get:
 *     summary: Obtiene todos los menús con sus productos y usuario asociado
 *     tags:
 *       - Menúes
 *     responses:
 *       200:
 *         description: Lista de menús encontrada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_menu:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   Usuario:
 *                     type: object
 *                     description: Usuario creador del menú
 *                     properties:
 *                       id_usuario:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                       email:
 *                         type: string
 *                   Productos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_producto:
 *                           type: integer
 *                         nombre:
 *                           type: string
 *                         precio:
 *                           type: number
 *                           format: float
 *       404:
 *         description: Menúes no encontrados
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllMenues); // Muestra todos

/**
 * @swagger
 * /menues/{id}:
 *   patch:
 *     summary: Actualiza un menú existente, incluyendo productos asociados
 *     tags:
 *       - Menúes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del menú a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               id_usuario:
 *                 type: integer
 *               lista_productos:
 *                 type: array
 *                 description: Lista de IDs de productos actualizados asociados al menú
 *                 items:
 *                   type: integer
 *     responses:
 *       201:
 *         description: Menú editado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 m:
 *                   $ref: '#/components/schemas/Menu'
 *                 msg:
 *                   type: string
 *                   example: Menú editado correctamente.
 *       404:
 *         description: Menú no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', updateMenu); // Modifica un menu

/**
 * @swagger
 * /menues/{id}:
 *   delete:
 *     summary: Elimina un menú existente por su ID
 *     tags:
 *       - Menúes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del menú a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Menú eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Menú eliminado correctamente.
 *       404:
 *         description: Menú no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Menú no encontrado.
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteMenu); // Elimina un menu

module.exports = router;