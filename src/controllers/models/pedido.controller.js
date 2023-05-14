const { Pedido, Usuario, PedidoProductos } = require('../../database/models/index');

const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll({
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario' }],
        });
        if (pedidos.length > 0) {
            pedidos.sort((a, b) => a.id_pedido - b.id_pedido);
            return await res.status(200).json(pedidos);
        } else {
            return res.status(404).json({ msg: 'Pedidos no encontrados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getOnePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id, {
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario' }],
        });
        if (!pedido) {
            return res.status(404).json({ msg: 'Pedido no encontrado.' });
        } else {
            // Devuelvo el pedido
            return res.status(200).json(pedido);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const deletePedido = async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ msg: 'Pedido no encontrado.' })
        } else {
            // Encuentro el pedido y borro las relaciones con los productos que lo tienen
            PedidoProductos.destroy({ where: { id_pedido: id } });
            // Borro el pedido
            pedido.destroy();
            return res.status(200).json({ msg: 'Borrado correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllPedidos, getOnePedido, deletePedido }