const { Usuario, Rol, Categoria, Estado } = require('../../database/models/index');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ['contraseña', 'id_rol','id_categoria', 'id_estado'] },
            include: [{ model: Rol }, { model: Categoria, as: 'Categoria' }, { model: Estado }]
        });
        // if (!usuarios) {
        //   return res.status(404).json({ msg: 'Usuarios no encontrados' });
        // } else {
        if (usuarios.length > 0) {
            usuarios.sort((a, b) => a.id_usuario - b.id_usuario);
            return await res.status(200).json(usuarios);
        } else {
            return res.status(404).json({ msg: 'Usuarios no encontrados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getOneUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const usuario = await Usuario.findByPk(id_usuario, {
            attributes: { exclude: ['contraseña', 'id_rol', 'id_categoria', 'id_estado'] },
            include: [{ model: Rol }, { model: Categoria, as: 'Categoria' }, { model: Estado }],
        });
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado.'});
        } else {
            // Devuelvo el usuario
            return res.status(200).json(usuario);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const register = async (req, res) => {
    try {
        // req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10); // tomo la contraseña que me llega, la encripto y la guardo en el campo password
        const usuario = await Usuario.create(req.body);
        // sendConfirmationEmail(u);
        if (usuario) {
            return res.status(200).json({ msg: 'Creado correctamente.', usuario })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const updateUsuario = async (req, res) => {
    try {
        const params = req.body;
        const id_usuario = req.params.id_usuario;
        const usuario = await Usuario.findByPk(id_usuario);
        if (usuario) {
            // let email = u.email;
            // Valido para cambiar el correo
            /* if (u.email != params.email) { // El mail del body es distinto al del usuario
                console.log("Voy a validar el email");
                const emailUnique = await EmailIsUniqueB(req, res); // Valido si ese mail lo tiene otro usuario
                if (emailUnique) {
                    email = params.email; // Si el correo es distinto al de la db y no esta en uso, guardo el nuevo
                } else {
                    return res.status(404).json({msg:"El mail ya fue registrado"})
                }
            } */
            // Hago el update
            usuario.update({
                nombre: params.nombre || usuario.nombre,
                apellido: params.apellido || usuario.apellido,
                id_rol: params.id_rol || usuario.id_rol,
                email: params.email || usuario.email,
                contraseña: params.contraseña || usuario.contraseña,
                direccion: params.direccion || usuario.direccion,
                telefono: params.telefono || usuario.telefono,
                id_categoria: params.id_categoria || usuario.id_categoria,
            })
                .then(usuario => { res.status(201).json({ usuario, msg: 'Editado correctamente.' }) })
        } else {
            return res.status(404).json({ msg: 'Usuario no encontrado.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllUsuarios, getOneUsuario, register, updateUsuario }