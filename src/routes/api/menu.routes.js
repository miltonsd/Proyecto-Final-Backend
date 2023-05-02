const Router = require('express');
const router = Router();
const { createOne, updateOne} = require('../../controllers/generico.controller');
const { Menu } = require('../../database/models/index');
const { getAllMenues, getOneMenu,  deleteMenu } = require('../../controllers/models/menu.controller');

// Rutas Genericas
router.post('/create', createOne(Menu)); // Crea un Menu
router.patch('/:id', updateOne(Menu)); // Modifica un menu

// Rutas Especificas
router.get('/', getAllMenues); // Muestra todos
router.get('/:id', getOneMenu); // Muestra un menu
router.delete('/:id', deleteMenu); // Elimina un menu

module.exports = router;