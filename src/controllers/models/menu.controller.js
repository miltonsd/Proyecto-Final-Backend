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
                id_producto: prod,
            });
        });

        if (menu) {
            return res.status(200).json({ msg: 'Menú creado correctamente.', menu })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
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
            return res.status(404).json({ msg: 'Menú no encontrado.' });
        } else {
            // Devuelvo el menu
            return res.status(200).json(menu);
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
            return res.status(404).json({ msg: 'Menúes no encontrados.' })
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

  const updateMenu = async (req,res) => {
    try {
        // Obtiene el menú
        const id_menu = req.params.id;
        let m = await Menu.findByPk(id_menu)
        if (m) {
            // Hago el update
            m.update({
                titulo: req.body.titulo || m.titulo,
                id_usuario: req.body.id_usuario || m.id_usuario
            }).then(async m => {
                const listaOriginal = []
                // Obtengo los productos asociados al menu
                const productosM = await m.getProductos({ joinTableAttributes: ['id_producto'] })
                productosM.forEach((p) => {
                    // Guardo los id_producto de la lista original asociados al menu
                    listaOriginal.push(p.dataValues.id_producto)
                })
                // Defino la lista con los productos que envía el frontend desde la petición HTTP
                const listaNuevos = req.body.lista_productos

                // Filtra desde los productos de la lista nueva aquellos que no están incluidos en la lista original, para agregarlos luego
                const productosAgregar = listaNuevos.filter(
                    (producto) => !listaOriginal.includes(producto)
                )
                
                // Filtra desde los productos de la lista original aquellos que no están incluidos en la lista nueva, para eliminarlos luego
                const productosEliminar = listaOriginal.filter(
                    (producto) => !listaNuevos.includes(producto)
                )

                // Agrega los nuevos productos asociados a la tabla intermedia
                await Promise.all(productosAgregar.map((id_productoAgregar) =>
                    MenuProductos.create({ id_menu: m.id_menu, id_producto: id_productoAgregar })
                ))

                // Elimina los productos asociados que ya no corresponden en la tabla intermedia
                await MenuProductos.destroy({
                    where: { id_menu: m.id_menu, id_producto: productosEliminar }, 
                    force: true // Hace un eliminado físico del registro en la tabla MenuProductos
                })

                res.status(201).json({m, 'msg':'Menú editado correctamente.'})
            })
        } else {
            return res.status(404).json({msg : "Menú no encontrado."})
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
            return res.status(404).json({ msg: 'Menú no encontrado.' })
        } else {
            // Borro el menu
            menu.destroy();
            return res.status(200).json({ msg: 'Menú eliminado correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { createMenu, getAllMenues, getOneMenu, updateMenu, deleteMenu, getAllMenuesUsuario }