const Router = require('express');
const router = Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../../controllers/generico.controller');
const { Rol } = require('../../database/models/index');
const { getAllRoles, getOneRol, createRol, updateRol, deleteRol } = require('../../controllers/models/rol.controller');

// Rutas Genericas
router.get('/', getAll(Rol)); // Muestra todos
router.get('/:id_rol', getOne(Rol)); // Muestra un rol
router.post('/create', createOne(Rol)); // Crea un rol
router.patch('/:id_rol', updateOne(Rol)); // Modifica un rol
router.delete('/:id_rol', deleteOne(Rol)); // Elimina un rol

// Rutas Especificas

module.exports = router;