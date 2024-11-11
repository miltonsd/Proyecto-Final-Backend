const Router = require("express");
const router = Router();

const { getAllResumenes, getOneResumen, createResumen, deleteResumen, updateResumen } = require("../../controllers/models/resumenDiarioUsuario.controller");
  
  // Rutas Genericas
  
  // Rutas Especificas
  router.get("/", getAllResumenes); // Muestra todos
  router.get("/:id", getOneResumen); // Muestra un resumen
  router.post("/create", createResumen); // Crea un resumen
  router.delete("/:id", deleteResumen); // Elimina un resumen
  router.patch("/:id", updateResumen); // Modifica un resumen

module.exports = router;