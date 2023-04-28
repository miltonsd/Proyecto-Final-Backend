const Router = require('express');
const router = Router();
const { getAllUsuarios, getOneUsuario, register, updateUsuario, deleteUsuario } = require('../../controllers/models/usuario.controller');

// Rutas Genericas

// Rutas Especificas
router.get('/', getAllUsuarios); // Muestra todos
router.get('/:id_usuario', getOneUsuario); // Muestra un usuario
router.post('/register', register); // Crea un usuario
router.patch('/:id_usuario', updateUsuario); // Modifica un usuario
router.delete('/:id_usuario', deleteUsuario); // Elimina un usuario

module.exports = router;