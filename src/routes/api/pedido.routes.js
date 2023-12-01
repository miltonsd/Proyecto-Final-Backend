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

// Rutas Genericas

// Rutas Especificas
router.get("/", getAllPedidos); // Muestra todos
router.get("/pendientes", getPendientes); // Muestra pendientes (Va antes que el GetOne porque sino toma 'pendientes' como si fuera un id o param)
router.get("/:id", getOnePedido); // Muestra un pedido
router.post("/create", createPedido); // Crea un pedido
router.post("/cambiarEstado/:id", cambiarEstado); // Cambia el estado del pedido "Pendiente" --> "Listo" --> "Entregado"
router.delete("/:id", deletePedido); // Elimina un pedido
router.patch("/:id", updatePedido); // Modifica un pedido

module.exports = router;
