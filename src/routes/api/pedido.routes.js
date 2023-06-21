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
router.get("/pendientes", getPendientes); // Muestra pendientes (Va antes que el GetOne porque sino toma 'pendientes' como si fuera un id o param)
router.get("/:id", getOnePedido); // Muestra un pedido
router.post("/create", createPedido); // Crea un pedido
router.post("/entregado/:id", setEntregado); // Entrega pedido marcandolo como isPendiente = false
router.delete("/:id", deletePedido); // Elimina un pedido

module.exports = router;
