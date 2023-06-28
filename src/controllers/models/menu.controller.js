const { Menu, Producto, Usuario, MenuProductos } = require('../../database/models/index');

const createMenu = async (req, res) => {
    try {
        const menu = await Menu.create({
            titulo: req.body.titulo,
            id_usuario: req.body.id_usuario
        });
        req.body.lista_productos.forEach((prod) => {
            MenuProductos.create({
                id_menu: menu.id_menu,
                id_producto: prod.id_producto,
            });
        });

        if (menu) {
            return res.status(200).json({ msg: 'Creado correctamente.', menu })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllMenues = async (req, res) => {
    try {
        const menues = await Menu.findAll({
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario', attributes: { exclude: ['contraseña'] }}, { model: Producto }]
        });
        if (menues.length > 0) {
            menues.sort((a, b) => a.id_menu - b.id_menu);
            return await res.status(200).json(menues);
        } else {
            return res.status(404).json({ msg: 'Menues no encontrados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getOneMenu = async (req, res) => {
    try {
        const { id } = req.params; 
        const menu = await Menu.findByPk(id, {
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario', attributes: { exclude: ['contraseña'] }}, { model: Producto }]
        });
        if (!menu) {
            return res.status(404).json({ msg: 'Menu no encontrado.' });
        } else {
            // Devuelvo el menu
            return res.status(200).json(menu);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const deleteMenu = async (req, res) => {
    try {
        const id = req.params.id;
        const menu = await Menu.findByPk(id);
        if (!menu) {
            return res.status(404).json({ msg: 'Menu no encontrado.' })
        } else {
            // Borro el menu
            menu.destroy();
            return res.status(200).json({ msg: 'Menu correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllMenuesUsuario = async (req, res) => {
    try {
        const id  = req.params.id_usuario;
        const menues = await Menu.findAll({
            where: { id_usuario : id },
            attributes: { exclude: ['id_usuario', 'createdAt', 'updatedAt', 'deletedAt'] },
            include: { 
              model: Producto, attributes: ['id_producto', 'descripcion', 'precio'], // ASÍ SE TRAEN LOS ATRIBUTOS QUE QUIERO (SIN USAR EL EXCLUDE)
              through: { attributes: [] }, // ASÍ NO SE TRAEN LOS ATRIBUTOS DE LA TABLA INTERMEDIA
            },
        });
        if (menues.length > 0) {
            menues.sort((a, b) => a.id_menu - b.id_menu);
            return await res.status(200).json(menues);
        } else {
            return res.status(404).json({ msg: 'El usuario no posee menúes personalizados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
  }

module.exports = { createMenu, getAllMenues, getOneMenu, deleteMenu, getAllMenuesUsuario }