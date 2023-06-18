const Router = require("express");
const router = Router();
const { updateOne } = require("../../controllers/generico.controller");
const { Pedido } = require("../../database/models/index");
const {
  getAllPedidos,
  getOnePedido,
  createPedido,
  deletePedido,
  getPendientes,
  setEntregado,
} = require("../../controllers/models/pedido.controller");

// Rutas Genericas
router.patch("/:id", updateOne(Pedido)); // Modifica un pedido

// Rutas Especificas
router.get("/", getAllPedidos); // Muestra todos
router.get("/:id", getOnePedido); // Muestra un pedido
router.post("/create", createPedido); // Crea un pedido
router.delete("/:id", deletePedido); // Elimina un pedido
router.get("/pendientes", getPendientes); // Muestra pendientes
router.post("/entregado/:id", setEntregado); // Entrega pedido marcandolo como isPendiente = false

module.exports = router;
