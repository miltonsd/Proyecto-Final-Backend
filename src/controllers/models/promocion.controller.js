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
            return res.status(200).json({ msg: 'Creado correctamente.', promocion })
        } else {
            return res.status(404).json({ msg: 'No se recibieron los datos.' })
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

const updatePromocion = async (req,res) => {
    try{
        console.log(req.body)
        const params = req.body;
        const id_menu = req.params.id_menu;
        let m = await Menu.findByPk(id_menu);
        if (m) {  
            // Hago el update
            m.update({
                titulo: params.titulo || m.titulo,
                id_usuario: params.id_usuario || m.id_usuario
            }).then(m => {
            // const menuProductos = await MenuProductos.findAll({ where: { id_menu: req.body.id_menu } })
            res.status(201).json({m, 'msg':'Editado correctamente'})
            })
        } else {
            return res.status(404).json({msg:"Rol no encontrado"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
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
            return res.status(200).json({ msg: 'Borrada correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllPromociones, getOnePromocion, createPromocion, deletePromocion, updatePromocion }