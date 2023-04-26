const Router = require('express');
const router = Router();
const { getAllRoles, getOneRol, createRol, updateRol, deleteOneRol } = require('../../controllers/models/rol.controller');

// Rutas Genericas

// Rutas Especificas
router.get('/', getAllRoles); // Muestra todos
router.get('/:id_rol', getOneRol); // Muestra un rol
router.post('/register', createRol); // Crea un rol
router.patch('/:id_rol', updateRol); // Modifica un rol
router.delete('/:id_rol', deleteOneRol); // Elimina un rol

module.exports = router;