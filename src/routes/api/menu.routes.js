const Router = require('express');
const router = Router();
const { createMenu, getAllMenues, getOneMenu, /*updateMenu*/ deleteOneMenu } = require('../../controllers/models/menu.controller');

// Rutas Genericas

// Rutas Especificas
router.post('/create', createMenu); // Crea un Menu
router.get('/', getAllMenues); // Muestra todos
router.get('/:id', getOneMenu); // Muestra un menu
// router.patch('/:id', updateMenu); // Modifica un menu
router.delete('/:id', deleteOneMenu); // Elimina un menu

module.exports = router;