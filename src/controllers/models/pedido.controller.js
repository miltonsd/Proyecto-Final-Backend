const { Pedido, Usuario, Producto } = require('../../database/models/index');

const getOnePedido = async (req,res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id, 
        {
            attributes: { exclude: ['id_usuario'] },
            include: [ { model: Usuario }, { model: Producto } ],
        }
        );
        if (!pedido) {
            return res.status(404).json({ msg: 'Pedido no encontrado.'});
        } else {
            // Devuelvo el pedido
            return res.status(200).json(pedido);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAllPedidos = async (req,res) => {
    try {
        const pedidos = await Pedido.findAll({
            attributes: { exclude: ['id_usuario'] },
            include: [ { model: Usuario }, { model: Producto } ],
        });
        if (pedidos.length > 0) {
            pedidos.sort((a, b) => a.id_pedido - b.id_pedido);
            return await res.status(200).json(pedidos);
        } else {
            return res.status(404).json({ msg: 'Pedidos no encontrados' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const createPedido = async (req,res) => {
    try{
        const p = await Pedido.create(req.body);
        if (p) {
            return res.status(200).json({'msg':'Creado correctamente', p})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const updatePedido = async (req,res) => {
    try{
        const params = req.body;
        const id = req.params.id;
        let p = await Pedido.findByPk(id);
        if (p) {
            // Hago el update
            p.update({
                fechaHoraPedido: params.fechaHoraPedido || p.fechaHoraPedido,
                estado: params.estado || p.estado,
                montoImporte: params.montoImporte || p.montoImporte,
            }).then(p => {
            res.status(201).json({p, 'msg':'Editado correctamente'})
            })
        } else {
            return res.status(404).json({msg:"Pedido no encontrado"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const deletePedido = async (req,res) => {
    try{
        const id = req.params.id;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({msg:"Pedido no encontrado"})
        } else {
            // Borro el pedido
            pedido.destroy();
            return res.status(200).json({msg:"Borrado correctamente"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {getOnePedido,getAllPedidos,createPedido,updatePedido,deletePedido}