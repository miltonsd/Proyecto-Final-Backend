const { Producto, TipoProducto, MenuProductos, PromocionProductos, PedidoProductos } = require('../../database/models/index');

const getOneProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id, {
            attributes: { exclude: ['id_tipoProducto'] },
            include: [{ model: TipoProducto }],
            paranoid: false
        });
        if (!Producto) {
            return res.status(404).json({ msg: 'Producto no encontrado.' });
        } else {
            // Devuelvo el producto
            return res.status(200).json(producto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll({
            attributes: { exclude: ['id_tipoProducto'] },
            include: [{ model: TipoProducto }],
            // paranoid: false
        });
        if (productos.length > 0) {
            productos.sort((a, b) => a.id_producto - b.id_producto);
            return await res.status(200).json(productos);
        } else {
            return res.status(404).json({ msg: 'Productos no encontrados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const deleteProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ msg: 'Producto no encontrado.' })
        } else {
            // Encuentro el producto y borro sus relaciones
            MenuProductos.destroy({ where: { id_producto: id } });
            PromocionProductos.destroy({ where: { id_producto: id } });
            // Borro el producto
            producto.destroy();
            return res.status(200).json({ msg: 'Producto eliminado correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllProductos, getOneProducto, deleteProducto }