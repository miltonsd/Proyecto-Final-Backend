const Router = require('express');
const router = Router();
const { deleteOne } = require('../../controllers/generico.controller');
const { Usuario } = require('../../database/models/index');
const { getAllUsuarios, getOneUsuario, login, logOut, register, updateUsuario, cambiarPassword } = require('../../controllers/models/usuario.controller');

// Rutas Genericas
router.delete('/:id', deleteOne(Usuario)); // Elimina un usuario

// Rutas Especificas
router.get('/', getAllUsuarios); // Muestra todos
router.get('/:id_usuario', getOneUsuario); // Muestra un usuario
router.post('/login', /*validateLogin, checkVerification,*/ login); // Login de usuario
router.post('/logout', /*validateLogin, checkVerification,*/ logOut); // LogOut del usuario
router.post('/register', register); // Crea un usuario
router.patch('/resetPassword', cambiarPassword); // Modifica la contraseña del usuario
router.patch('/:id_usuario', updateUsuario); // Modifica un usuario

module.exports = router;