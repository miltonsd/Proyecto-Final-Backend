const Router = require("express");
const router = Router();
const {
  getAllPedidos,
  getOnePedido,
  createPedido,
  deletePedido,
  getPendientes,
  cambiarEstado,
  updatePedido,
} = require("../../controllers/models/pedido.controller");

// Rutas Especificas

/**
 * @swagger
 * /pedidos/create:
 *   post:
 *     tags:
 *       - Pedidos
 *     summary: Crear un nuevo pedido
 *     description: Crea un nuevo pedido junto a sus productos asociados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fechaHora
 *               - estado
 *               - montoImporte
 *               - id_usuario
 *               - id_mesa
 *               - lista_productos
 *             properties:
 *               fechaHora:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: string
 *               montoImporte:
 *                 type: number
 *               id_usuario:
 *                 type: integer
 *               id_mesa:
 *                 type: integer
 *               observacion:
 *                 type: string
 *               lista_productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id_producto:
 *                       type: integer
 *                     cant_selecc:
 *                       type: integer
 *                     precio:
 *                       type: number
 *     responses:
 *       200:
 *         description: Pedido creado correctamente.
 *       404:
 *         description: No se recibieron los datos.
 *       500:
 *         description: Error en el servidor.
 */
router.post("/create", createPedido); // Crea un pedido

/**
 * @swagger
 * /pedidos/pendientes:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: Obtener pedidos pendientes y listos
 *     description: Devuelve todos los pedidos cuyo estado sea 'Pendiente' o 'Listo'.
 *     responses:
 *       200:
 *         description: Lista de pedidos pendientes.
 *       404:
 *         description: No se encontraron pedidos pendientes.
 *       500:
 *         description: Error en el servidor.
 */
router.get("/pendientes", getPendientes); // Muestra pendientes (Va antes que el GetOne porque sino toma 'pendientes' como si fuera un id o param)

/**
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: Obtener un pedido por ID
 *     description: Retorna el detalle del pedido incluyendo usuario y productos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.get("/:id", getOnePedido); // Muestra un pedido

/**
 * @swagger
 * /pedidos:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: Obtener todos los pedidos
 *     description: Devuelve todos los pedidos activos con su usuario y productos asociados.
 *     responses:
 *       200:
 *         description: Lista de pedidos.
 *       404:
 *         description: Pedidos no encontrados.
 *       500:
 *         description: Error en el servidor.
 */
router.get("/", getAllPedidos); // Muestra todos

/**
 * @swagger
 * /pedidos/cambiarEstado/{id}:
 *   patch:
 *     tags:
 *       - Pedidos
 *     summary: Cambiar el estado de un pedido
 *     description: Cambia el estado de un pedido de "Pendiente" a "Listo" o de "Listo" a "Entregado".
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Estado del pedido actualizado correctamente.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.patch("/cambiarEstado/:id", cambiarEstado); // Cambia el estado del pedido "Pendiente" --> "Listo" --> "Entregado"

/**
 * @swagger
 * /pedidos/{id}:
 *   patch:
 *     tags:
 *       - Pedidos
 *     summary: Editar un pedido existente
 *     description: Actualiza los datos del pedido y sus productos asociados.
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
 *               id_usuario:
 *                 type: integer
 *               id_mesa:
 *                 type: integer
 *               estado:
 *                 type: string
 *               montoImporte:
 *                 type: number
 *               observacion:
 *                 type: string
 *               lista_productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id_producto:
 *                       type: integer
 *                     cant_selecc:
 *                       type: integer
 *                     precio:
 *                       type: number
 *     responses:
 *       201:
 *         description: Pedido editado correctamente.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.patch("/:id", updatePedido); // Modifica un pedido

/**
 * @swagger
 * /pedidos/{id}:
 *   delete:
 *     tags:
 *       - Pedidos
 *     summary: Eliminar un pedido
 *     description: Elimina un pedido junto con sus productos asociados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido eliminado correctamente.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.delete("/:id", deletePedido); // Elimina un pedido

module.exports = router;
