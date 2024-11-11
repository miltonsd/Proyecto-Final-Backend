const Router = require('express');
const router = Router();
const { deleteOne } = require('../../controllers/generico.controller');
const { Usuario } = require('../../database/models/index');
const { getAllUsuarios, getOneUsuario, login, logOut, register, updateUsuario, cambiarPassword, modificarPerfil, confirmarUsuario } = require('../../controllers/models/usuario.controller');
const { getAllReservasUsuario } = require('../../controllers/models/reserva.controller');
const { getAllPedidosUsuario } = require('../../controllers/models/pedido.controller');
const { getAllResumenesUsuario } = require('../../controllers/models/resumenDiarioUsuario.controller');
const { getAllMenuesUsuario } = require('../../controllers/models/menu.controller');

// Rutas Genericas
router.delete('/:id', deleteOne(Usuario)); // Elimina un usuario

// Rutas Especificas
router.get('/confirmar/:token', confirmarUsuario); // Confirma el email del usuario
router.get('/', getAllUsuarios); // Muestra todos
router.get('/:id_usuario', getOneUsuario); // Muestra un usuario
router.get('/:id_usuario/reservas', getAllReservasUsuario); // Muestra todas (inclusive las canceladas) las reservas del usuario
router.get('/:id_usuario/pedidos', getAllPedidosUsuario); // Muestra todos los pedidos del usuario
router.get('/:id_usuario/resumenes', getAllResumenesUsuario); // Muestra todos los resumenes del usuario
router.get('/:id_usuario/menues', getAllMenuesUsuario); // Muestra todos los menúes del usuario
router.post('/login', /*validateLogin, checkVerification,*/ login); // Login de usuario
router.post('/logout', /*validateLogin, checkVerification,*/ logOut); // LogOut del usuario
router.post('/register', register); // Crea un usuario
router.patch('/resetPassword', cambiarPassword); // Modifica la contraseña del usuario
router.patch('/modificarPerfil/:id_usuario', modificarPerfil); // Modifica los datos del perfil de un usuario
router.patch('/:id_usuario', updateUsuario); // Modifica un usuario

module.exports = router;