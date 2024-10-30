const { Promocion, Producto, PromocionProductos } = require('../../database/models/index');

const createPromocion = async (req, res) => {
    try {
        console.log(req.body)
        const promocion = await Promocion.create({
            porcentaje_desc: req.body.porcentaje_desc,
            fecha_desde: req.body.fecha_desde,
            fecha_hasta: req.body.fecha_hasta,
        });
        req.body.lista_productos.forEach((prod) => {
            PromocionProductos.create({
                id_promocion: promocion.id_promocion,
                id_producto: prod,
            });
        });

        if (promocion) {
            return res.status(200).json({ msg: 'Promoción creada correctamente.', promocion })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getOnePromocion = async (req, res) => {
    try {
        const { id } = req.params;
        const promocion = await Promocion.findByPk(id, {
            include: [{ model: Producto }],
        });
        if (!promocion) {
            return res.status(404).json({ msg: 'Promoción no encontrada.' });
        } else {
            // Devuelvo la promoción
            return res.status(200).json(promocion);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllPromociones = async (req, res) => {
    try {
        const promociones = await Promocion.findAll({
            include: [{ model: Producto }],
        });
        if (promociones.length > 0) {
            promociones.sort((a, b) => a.id_promocion - b.id_promocion);
            return await res.status(200).json(promociones);
        } else {
            return res.status(404).json({ msg: 'Promociones no encontradas.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const updatePromocion = async (req,res) => {
    try {
        // Obtiene la promoción
        const id_promocion = req.params.id;
        let prom = await Promocion.findByPk(id_promocion)
        if (prom) {
            // Hago el update
            prom.update({
                porcentaje_desc: req.body.porcentaje_desc || prom.porcentaje_desc,
                fecha_desde: req.body.fecha_desde || prom.fecha_desde,
                fecha_hasta: req.body.fecha_hasta || prom.fecha_hasta,
            }).then(async prom => {
                const listaOriginal = []
                // Obtengo los productos asociados a la promocion
                const productosProm = await prom.getProductos({ joinTableAttributes: ['id_producto'] })
                productosProm.forEach((prod) => {
                    // Guardo los id_producto de la lista original asociados a la promocion
                    listaOriginal.push(prod.dataValues.id_producto)
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
                    PromocionProductos.create({ id_promocion: prom.id_promocion, id_producto: id_productoAgregar })
                ))

                // Elimina los productos asociados que ya no corresponden en la tabla intermedia
                await PromocionProductos.destroy({
                    where: { id_promocion: prom.id_promocion, id_producto: productosEliminar }, 
                    force: true // Hace un eliminado físico del registro en la tabla PromocionProductos
                })

                res.status(201).json({prom, 'msg' : 'Promoción editada correctamente.'})
            })
        } else {
            return res.status(404).json({msg : "Promoción no encontrada."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const deletePromocion = async (req, res) => {
    try {
        const id = req.params.id;
        const promocion = await Promocion.findByPk(id);
        if (!promocion) {
            return res.status(404).json({ msg: 'Promoción no encontrada.' })
        } else {
            // Encuentro la promocion y borro las relaciones con los productos que lo tienen
            PromocionProductos.destroy({ where: { id_promocion: id } });
            // Borro la promocion
            promocion.destroy();
            return res.status(200).json({ msg: 'Promoción eliminada correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllPromociones, getOnePromocion, createPromocion, deletePromocion, updatePromocion }