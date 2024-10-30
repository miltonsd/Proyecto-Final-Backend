const { TipoProducto, Producto } = require('../../database/models/index');

const deleteTipoProducto = async (req,res) => {
    try {
        const id_tipoProducto = req.params.id;
        const tipoProducto = await TipoProducto.findByPk(id_tipoProducto);
        if (!tipoProducto) {
            return res.status(404).json({msg:"Tipo producto no encontrado."})
        } else {
            // Busca todos los productos que pertenecen a ese tipo producto
            // const productos = await Producto.findAll({
            //     where: { id_tipoProducto: tipoProducto.id_tipoProducto } })
            // console.log(productos)
                // Asigna a todos los productos el tipo producto "Genérico" (ID: 0)
            await Producto.update({ id_tipoProducto: 0 }, { where: { id_tipoProducto: tipoProducto.id_tipoProducto } })
            //   ))
            // Borro el tipo producto
            tipoProducto.destroy();
            return res.status(200).json({msg:"Tipo producto eliminado correctamente."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { deleteTipoProducto }