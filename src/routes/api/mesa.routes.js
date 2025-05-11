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
router.get("/", getAll(Mesa)); // Muestra todas
router.get("/:id", getOne(Mesa)); // Muestra una mesa
router.post("/create", createOne(Mesa)); // Crea una Mesa
router.patch("/:id", updateOne(Mesa)); // Modifica una mesa

//Rutas Especificas
router.delete("/:id", deleteMesa); // Elimina una mesa
router.post("/habilitar/:id", habilitarMesa);
router.post("/deshabilitar/:id", deshabilitarMesa);

module.exports = router;
