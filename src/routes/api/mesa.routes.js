const Router = require("express");
const router = Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../../controllers/generico.controller");
const { Mesa } = require("../../database/models/index");
const {
  habilitarMesa,
  deshabilitarMesa,
} = require("../../controllers/models/mesa.controller");

// Rutas Genericas
router.get("/", getAll(Mesa)); // Muestra todas
router.get("/:id", getOne(Mesa)); // Muestra una mesa
router.post("/create", createOne(Mesa)); // Crea una Mesa
router.patch("/:id", updateOne(Mesa)); // Modifica una mesa
router.delete("/:id", deleteOne(Mesa)); // Elimina una mesa

//Rutas Especificas
router.post("/habilitar/:id", habilitarMesa);
router.post("/deshabilitar/:id", deshabilitarMesa);

module.exports = router;
