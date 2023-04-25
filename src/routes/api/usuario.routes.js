const Router = require('express');
const router = Router();
const { getAllUsuarios, getOneUsuario, register, updateUsuario, deleteOneUsuario } = require('../../controllers/models/usuario.controller');

// Rutas Genericas

// Rutas Especificas
router.get('/', getAllUsuarios); // Muestra todos
router.get('/:id', getOneUsuario); // Muestra un usuario
router.post('/register', register); // Crea un usuario
router.patch('/:id', updateUsuario); // Modifica un usuario
router.delete('/:id', deleteOneUsuario); // Elimina un usuario