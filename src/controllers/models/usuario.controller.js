const { Usuario, Rol, Categoria } = require('../../database/models/index');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { envioConfirmacionEmail } = require('../../helpers/sendEmail');

const getOneUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const usuario = await Usuario.findByPk(id_usuario, {
            attributes: { exclude: ['contraseña', 'id_rol', 'id_categoria'] },
            include: [{ model: Rol }, { model: Categoria, as: 'Categoria' }],
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

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ['contraseña', 'id_rol', 'id_categoria'] },
            include: [{ model: Rol }, { model: Categoria, as: 'Categoria' }]
        });
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

const updateUsuario = async (req, res) => {
    try {
        console.log(req.body)
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
                fechaNacimiento: params.fechaNacimiento || usuario.fechaNacimiento,
                contraseña: params.contraseña? bcrypt.hashSync(params.contraseña) : usuario.contraseña, // Valida si recibe una contraseña para hashearla, sino se queda con la existente
                isConfirmado: params.isConfirmado,
                direccion: params.direccion || usuario.direccion,
                telefono: params.telefono || usuario.telefono,
                id_categoria: params.id_categoria || usuario.id_categoria,
            })
                .then(usuario => { res.status(201).json({ usuario, msg: 'Usuario editado correctamente.' }) })
        } else {
            return res.status(404).json({ msg: 'Usuario no encontrado.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const register = async (req, res) => {
    try {
        req.body.contraseña = bcrypt.hashSync(req.body.contraseña) // tomo la contraseña que me llega, la encripto y la guardo en la DB
        const usuario = await Usuario.create(req.body)
        if (usuario) {
            envioConfirmacionEmail(usuario)
            return res.status(200).json({ msg: 'Usuario creado correctamente.', usuario })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const confirmarUsuario =  async (req, res) => {
    try{
        const token = req.params.token;
        const email = jwt.decode(token, process.env.HASH_KEY);
        const u = await Usuario.findOne({ where: { email: email } });
        if (u) {
            u.update({
                isConfirmado: true
            }).then(u => {
                return res.redirect(`http://${process.env.FRONT_URL}/auth`);
            })
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos.'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const cambiarPassword = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ where: { email: req.body.email } });
        if (usuario) {
        // Hago el update
            usuario.update({
                contraseña: bcrypt.hashSync(req.body.contraseña) || usuario.contraseña,
            })
                .then(usuario => { res.status(201).json({ usuario, msg: 'Contraseña editada correctamente.' }) })
        } else {
            return res.status(404).json({ msg: 'Usuario no encontrado.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

// Este método valida la contraseña para luego modificar los datos del usuario y/o la contraseña
const modificarPerfil = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const usuario = await Usuario.findByPk(id_usuario);
        if (usuario) {
            const data = req.body
            if (bcrypt.compareSync(data.contrasenia, usuario.contraseña)) {
                // Aca modifica los datos del perfil del usuario
                usuario.update({
                    nombre: data.nombre || usuario.nombre,
                    apellido: data.apellido || usuario.apellido,
                    // Valida si recibe una nuevaContrasenia para modificar la existente o, caso contrario, asigna la que ya tiene definida.
                    contraseña: data.nuevaContrasenia? bcrypt.hashSync(data.nuevaContrasenia) : usuario.contraseña,
                    direccion: data.direccion || usuario.direccion,
                    telefono: data.telefono || usuario.telefono,
                })
                    .then(usuario => { res.status(201).json({ usuario, msg: 'Perfil editado correctamente.' }) })
            } else {
                // En caso de que la contraseña ingresada no sea la correcta
                return res.status(404).json({ msg: 'Contraseña incorrecta.' })
            }
        } else {
            return res.status(404).json({ msg: 'Usuario no encontrado.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const login = async (req, res) => {
    try {
        //Comprobar email en DB
        const usuario = await Usuario.findOne({ where: { email: req.body.email } });
        if (usuario) {
            // El email esta en la db, ahora valido si la contraseña es correcta
            if (bcrypt.compareSync(req.body.contraseña, usuario.contraseña)) {
                // Valido si el usuario confirmo el mail
                if (usuario.isConfirmado) {
                    // Creo el token
                    let token = crearToken(usuario);
                    // Guardo el token en la cookie
                    res.cookie('jwt', token, { httpOnly: true, secure: true });
                    return res.status(200).json({ token })
                } else {
                    return res.status(404).json({ msg: "El usuario aún no verificó su email." })
                }
            } else {
                return res.status(404).json({ msg: 'Email y/o contraseña incorrectos.' })
            }
        } else{
            // Email no se encontro en la DB
            return res.status(404).json({ msg:'Email y/o contraseña incorrectos.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const logOut = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const payload = jwt.decode(token, process.env.HASH_KEY);
        payload.expiredAt = Math.floor(Date.now() / 1000) - 10; // Establece la fecha de expiración 10 segundos en el pasado
        const newToken = jwt.encode(payload, process.env.HASH_KEY); // Genera un nuevo token con la fecha de expiración modificada
        res.status(200).json({ message: 'Logout exitoso.', token: newToken });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'No hay token.' })
    }
};

const crearToken = (usuario) => {
    // El payload son los datos del usuario que le pasó para crear el token con JWT
    const payload = {
        id_usuario: usuario.id_usuario,
        id_rol: usuario.id_rol,
        createdAt: moment().unix(),
        // Rol = 2 (Usuario) -> 90 minutos / El resto (admin y mozo/cocina) -> 8 horas
        expiredAt: usuario.id_rol === 2 ? moment().add(90, 'minutes').unix() : moment().add(8, 'hours').unix()
    }
    return jwt.encode(payload, process.env.HASH_KEY) // poner una frase secreta en el .env
}

module.exports = { getAllUsuarios, getOneUsuario, login, logOut, register, cambiarPassword, updateUsuario, modificarPerfil, confirmarUsuario }