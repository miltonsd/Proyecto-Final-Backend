const { Usuario } = require('../../database/models/index');

const getOneUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({
            where: { id },
            attributes: { exclude: ['contraseña', 'id_rol', 'cod_categoria', 'cod_estado'] },
            include: [ { model: Rol }, { model: Categoria }, { model: Estado } ],
        });
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado.'});
        } else {
            // Devuelvo el usuario
            return res.status(200).json(usuario);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAllUsuarios = async (req,res) => {}
const register = async (req,res) => {}
const updateUsuario = async (req,res) => {}
const deleteOneUsuario = async (req,res) => {}

/*
const getAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password', 'idRole'] },
            include: [{model: Role}]
        });
        if (!users) {
            return res.status(404).json({ msg: 'Usuarios no encontrados' });
        } else {
            const usersArray = [];
            const promises = users.map(async (user) => {
                const seed = user.seed;
                const url = await externalApi(seed);

                // Devuelvo todos los datos y la url de la imagen
                user.dataValues.image = url;

                usersArray.push(user);
            });
            // Espero a que se resuelvan todas las promesas
            await Promise.all(promises);
            usersArray.sort((a, b) => a.id - b.id);
            return await res.status(200).json(usersArray);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const update = async (req,res) => {
    try{
        const params = req.body;
        const id = req.params.id;
        let u = await User.findByPk(id);
        if (u) {
            let email = u.email;
            // Valido para cambiar el correo
            if (u.email != params.email){ // El mail del body es distinto al del usuario
                console.log("Voy a validar el email")
                const emailUnique = await EmailIsUniqueB(req, res); // Valido si ese mail lo tiene otro usuario

                if (emailUnique){
                    email = params.email; // Si el correo es distinto al de la db y no esta en uso, guardo el nuevo
                }else{
                    return res.status(404).json({msg:"El mail ya fue registrado"})
                }
            }
            // Hago el update
            u.update({
                name: params.name || u.name,
                surname: params.surname || u.surname,
                idRole: params.idRole || u.idRole,
                email: email,
                seed: params.seed || u.seed,
            }).then(u => {
            res.status(201).json({u, 'msg':'Editado correctamente'})
            })
        } else {
            return res.status(404).json({msg:"Usuario no encontrado"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

const deleteOne = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({msg:"Elemento no encontrado"})
        } else {
            // Encuentro el usuario y borro los juegos que tiene
            Usergame.destroy({where: {idUser: id}})

            // Borro el usuario
            user.destroy();
            return res.status(200).json({msg:"Borrado correctamente"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const register =  async (req, res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 10); // tomo la pw que me llega, la encripto y la guardo en el campo password
        const u = await User.create(req.body);
        sendConfirmationEmail(u);
        if (u) {
            return res.status(200).json({'msg':'Creado correctamente', u})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}
*/