const Router = require("express");
const router = Router();

const { getAllResumenes, getOneResumen, createResumen, deleteResumen, updateResumen } = require("../../controllers/models/resumenDiarioUsuario.controller");
  
// Rutas Especificas

/**
 * @swagger
 * /resumenes/create:
 *   post:
 *     summary: Crea un nuevo resumen diario
 *     tags:
 *       - ResúmenesDiarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fechaHora
 *               - montoTotal
 *               - id_usuario
 *               - lista_pedidos
 *             properties:
 *               fechaHora:
 *                 type: string
 *                 format: date-time
 *               montoTotal:
 *                 type: number
 *               id_usuario:
 *                 type: integer
 *               lista_pedidos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id_usuario:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Resumen creado correctamente
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post("/create", createResumen); // Crea un resumen

/**
 * @swagger
 * /resumenes/{id}:
 *   get:
 *     summary: Obtiene un resumen diario por ID
 *     tags:
 *       - ResúmenesDiarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resumen encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_resumenDiario:
 *                   type: integer
 *                 fechaHora:
 *                   type: string
 *                   format: date-time
 *                 montoTotal:
 *                   type: number
 *                 Usuario:
 *                   type: object
 *                 pedidos:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get("/:id", getOneResumen); // Muestra un resumen

/**
 * @swagger
 * /resumenes:
 *   get:
 *     summary: Obtiene todos los resúmenes diarios
 *     tags:
 *       - ResúmenesDiarios
 *     responses:
 *       200:
 *         description: Lista de resúmenes diarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_resumenDiario:
 *                     type: integer
 *                   fechaHora:
 *                     type: string
 *                     format: date-time
 *                   montoTotal:
 *                     type: number
 *                   Usuario:
 *                     type: object
 *                     properties:
 *                       id_usuario:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                       email:
 *                         type: string
 *                   pedidos:
 *                     type: array
 *                     items:
 *                       type: object
 *       404:
 *         description: Resúmenes no encontrados
 *       500:
 *         description: Error en el servidor
 */
router.get("/", getAllResumenes); // Muestra todos

/**
 * @swagger
 * /resumenes/{id}:
 *   patch:
 *     summary: Edita un resumen diario existente
 *     tags:
 *       - ResúmenesDiarios
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
 *               fechaHora:
 *                 type: string
 *                 format: date-time
 *               montoTotal:
 *                 type: number
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Resumen editado correctamente
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch("/:id", updateResumen); // Modifica un resumen

/**
 * @swagger
 * /resumenes/{id}:
 *   delete:
 *     summary: Elimina un resumen diario por ID
 *     tags:
 *       - ResúmenesDiarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resumen eliminado correctamente
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete("/:id", deleteResumen); // Elimina un resumen

module.exports = router;