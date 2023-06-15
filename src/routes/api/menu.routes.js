const Router = require('express');
const router = Router();
const { updateOne } = require('../../controllers/generico.controller');
const { Menu } = require('../../database/models/index');
const { createMenu, getAllMenues, getOneMenu,  deleteMenu } = require('../../controllers/models/menu.controller');

// Rutas Genericas
router.patch('/:id', updateOne(Menu)); // Modifica un menu

// Rutas Especificas
router.post('/create', createMenu); // Crea un Menu
router.get('/', getAllMenues); // Muestra todos
router.get('/:id', getOneMenu); // Muestra un menu
router.delete('/:id', deleteMenu); // Elimina un menu

module.exports = router;