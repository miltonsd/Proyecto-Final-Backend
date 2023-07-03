const Router = require('express');
const router = Router();
const { updateOne } = require('../../controllers/generico.controller');
const { Menu } = require('../../database/models/index');
const { createMenu, getAllMenues, getOneMenu,  deleteMenu, updateMenu } = require('../../controllers/models/menu.controller');

// Rutas Genericas

// Rutas Especificas
router.post('/create', createMenu); // Crea un Menu
router.get('/', getAllMenues); // Muestra todos
router.get('/:id', getOneMenu); // Muestra un menu
router.delete('/:id', deleteMenu); // Elimina un menu
router.patch('/:id', updateMenu); // Modifica un menu

module.exports = router;