const Router = require('express');
const router = Router();
const { getAllUsuarios, getOneUsuario, login, logOut, register, updateUsuario, resetPassword, cambiarPassword, modificarPerfil, confirmarUsuario, deleteUsuario } = require('../../controllers/models/usuario.controller');
const { getAllReservasUsuario } = require('../../controllers/models/reserva.controller');
const { getAllPedidosUsuario } = require('../../controllers/models/pedido.controller');
const { getAllResumenesUsuario } = require('../../controllers/models/resumenDiarioUsuario.controller');
const { getAllMenuesUsuario } = require('../../controllers/models/menu.controller');

// Rutas Especificas

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: 
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - contraseña
 *             properties:
 *               email:
 *                 type: string
 *               contraseña:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso, se devuelve el token
 *       404:
 *         description: Email y/o contraseña incorrectos o email no verificado
 *       500:
 *         description: Error en el servidor
 */
router.post('/login', /*validateLogin, checkVerification,*/ login); // Login de usuario

/**
 * @swagger
 * /usuarios/logout:
 *   post:
 *     summary: Cerrar sesión
 *     tags: 
 *       - Usuarios
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout exitoso
 *       500:
 *         description: No hay token o error en el servidor
 */
router.post('/logout', /*validateLogin, checkVerification,*/ logOut); // LogOut del usuario

/**
 * @swagger
 * /usuarios/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: 
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - email
 *               - contraseña
 *               - documento
 *               - direccion
 *               - telefono
 *               - fechaNacimiento
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *               contraseña:
 *                 type: string
 *               documento:
 *                 type: string
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: string
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.post('/register', register); // Crea un usuario


/**
 * @swagger
 * /usuarios/confirmar/{token}:
 *   get:
 *     summary: Confirmar el email del usuario
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token de confirmación
 *     responses:
 *       302:
 *         description: Redirección al login tras confirmar el email
 *       404:
 *         description: No se recibieron los datos
 *       500:
 *         description: Error en el servidor
 */
router.get('/confirmar/:token', confirmarUsuario); // Confirma el email del usuario


/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: 
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *       404:
 *         description: No se encontraron usuarios
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllUsuarios); // Muestra todos

/**
 * @swagger
 * /usuarios/{id_usuario}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id_usuario', getOneUsuario); // Muestra un usuario

/**
 * @swagger
 * /usuarios/{id_usuario}/reservas:
 *   get:
 *     summary: Obtener todas las reservas de un usuario
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Reservas obtenidas correctamente
 *       404:
 *         description: Usuario no encontrado o sin reservas
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id_usuario/reservas', getAllReservasUsuario); // Muestra todas (inclusive las canceladas) las reservas del usuario

/**
 * @swagger
 * /usuarios/{id_usuario}/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos de un usuario
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Pedidos obtenidos correctamente
 *       404:
 *         description: Usuario no encontrado o sin pedidos
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id_usuario/pedidos', getAllPedidosUsuario); // Muestra todos los pedidos del usuario

/**
 * @swagger
 * /usuarios/{id_usuario}/resumenes:
 *   get:
 *     summary: Obtener todos los resúmenes diarios de un usuario
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Resúmenes diarios obtenidos correctamente
 *       404:
 *         description: Usuario no encontrado o sin resúmenes
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id_usuario/resumenes', getAllResumenesUsuario); // Muestra todos los resumenes del usuario

/**
 * @swagger
 * /usuarios/{id_usuario}/menues:
 *   get:
 *     summary: Obtener todos los menús asociados a un usuario
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Menúes obtenidos correctamente
 *       404:
 *         description: Usuario no encontrado o sin menús
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id_usuario/menues', getAllMenuesUsuario); // Muestra todos los menúes del usuario

/**
 * @swagger
 * /usuarios/resetPassword:
 *   patch:
 *     summary: Reinicia la contraseña de un usuario por email, cuando se olvida la contraseña
 *     tags: 
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - contraseña
 *             properties:
 *               email:
 *                 type: string
 *               contraseña:
 *                 type: string
 *     responses:
 *       200:
 *         description: Se envió un email de confirmación para cambiar la contraseña
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/resetPassword', resetPassword); // Reinicia la contraseña del usuario (cuando se olvida la contraseña)

/**
 * @swagger
 * /usuarios/cambiarPassword/{token}:
 *   patch:
 *     summary: Modifica la contraseña de un usuario
 *     tags: 
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contraseña editada correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/cambiarPassword/:token', cambiarPassword); // Modifica la contraseña del usuario

/**
 * @swagger
 * /usuarios/modificarPerfil/{id_usuario}:
 *   patch:
 *     summary: Modificar perfil de usuario validando contraseña
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contrasenia
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: string
 *               contrasenia:
 *                 type: string
 *               nuevaContrasenia:
 *                 type: string
 *     responses:
 *       201:
 *         description: Perfil editado correctamente
 *       404:
 *         description: Usuario no encontrado o contraseña incorrecta
 *       500:
 *         description: Error en el servidor
 */
router.patch('/modificarPerfil/:id_usuario', modificarPerfil); // Modifica los datos del perfil de un usuario

/**
 * @swagger
 * /usuarios/{id_usuario}:
 *   patch:
 *     summary: Editar un usuario por ID
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *               contraseña:
 *                 type: string
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: string
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *               id_rol:
 *                 type: integer
 *               id_categoria:
 *                 type: integer
 *               isConfirmado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Usuario editado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id_usuario', updateUsuario); // Modifica un usuario

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: 
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 elemento:
 *                   $ref: '#/components/schemas/Usuario'
 *                 msg:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', deleteUsuario); // Elimina un usuario

module.exports = router;