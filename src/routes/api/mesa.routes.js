const Router = require("express");
const router = Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
} = require("../../controllers/generico.controller");
const { Mesa } = require("../../database/models/index");
const {
  deleteMesa,
  habilitarMesa,
  deshabilitarMesa,
} = require("../../controllers/models/mesa.controller");

// Rutas Genericas

/**
 * @swagger
 * /mesas/create:
 *   post:
 *     summary: Crea una nueva mesa
 *     tags: 
 *        - Mesas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - capacidad
 *               - ubicacion
 *               - qr
 *             properties:
 *               capacidad:
 *                 type: integer
 *                 minimum: 2
 *                 maximum: 6
 *               ubicacion:
 *                 type: string
 *               qr:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mesa creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mesa'
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error del servidor
 *
 */
router.post("/create", createOne(Mesa)); // Crea una Mesa

/**
 * @swagger
 * /mesas/{id}:
 *   get:
 *     summary: Obtener una mesa por ID
 *     tags:
 *       - Mesas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mesa encontrada
 *       404:
 *         description: Mesa no encontrada
 *       500:
 *         description: Error del servidor
 *
 */
router.get("/:id", getOne(Mesa)); // Muestra una mesa

/**
 * @swagger
 * /mesas:
 *   get:
 *     summary: Obtener todas las mesas
 *     tags: 
 *       - Mesas
 *     responses:
 *       200:
 *         description: Lista de mesas obtenida correctamente
 *       404:
 *         description: Mesas no encontradas 
 *       500:
 *         description: Error en el servidor
 */
router.get("/", getAll(Mesa)); // Muestra todas

/**
 * @swagger
 * /mesas/{id}:
 *   patch:
 *     summary: Actualizar una mesa existente
 *     tags: 
 *       - Mesas
 *     parameters:
 *       - in: path
 *         name: id
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
 *               capacidad:
 *                 type: integer
 *                 minimum: 2
 *                 maximum: 6
 *               ubicacion:
 *                 type: string
 *               habilitada:
 *                 type: boolean
 *               qr:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mesa actualizada exitosamente
 *       404:
 *         description: Mesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch("/:id", updateOne(Mesa)); // Modifica una mesa

//Rutas Especificas

/**
 * @swagger
 * /mesas/{id}:
 *   delete:
 *     summary: Eliminar una mesa (borrado lógico)
 *     tags: 
 *       - Mesas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mesa eliminada correctamente
 *       404:
 *         description: Mesa no encontrada o con pedidos/reservas pendientes
 *       500:
 *         description: Error en el servidor
 */
router.delete("/:id", deleteMesa); // Elimina una mesa

/**
 * @swagger
 * /mesas/habilitar/{id}:
 *   patch:
 *     summary: Habilitar una mesa
 *     tags: 
 *       - Mesas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Mesa habilitada exitosamente
 *       404:
 *         description: Mesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch("/habilitar/:id", habilitarMesa);

/**
 * @swagger
 * /mesas/deshabilitar/{id}:
 *   patch:
 *     summary: Deshabilitar una mesa
 *     tags: 
 *       - Mesas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Mesa deshabilitada exitosamente
 *       404:
 *         description: Mesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.patch("/deshabilitar/:id", deshabilitarMesa);

module.exports = router;
