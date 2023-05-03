const Router = require('express');
const router = Router();
const { deleteOne } = require('../../controllers/generico.controller');
const { Usuario } = require('../../database/models/index');
const { getAllUsuarios, getOneUsuario, register, updateUsuario, editOne, createOne } = require('../../controllers/models/usuario.controller');

router.get('/editOne/:id_usuario', editOne);
router.get('/createOne', createOne);

// Rutas Genericas
router.delete('/:id', deleteOne(Usuario)); // Elimina un usuario

// Rutas Especificas
router.get('/', getAllUsuarios); // Muestra todos
router.get('/:id_usuario', getOneUsuario); // Muestra un usuario
router.post('/register', register); // Crea un usuario
router.patch('/:id_usuario', updateUsuario); // Modifica un usuario

module.exports = router;