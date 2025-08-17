const { TipoProducto, Producto } = require('../../database/models/index');

const deleteTipoProducto = async (req,res) => {
    try {
        const id_tipoProducto = parseInt(req.params.id, 10) // Se asegura que el param sea un número entero
    
        // Valida que no se quiera borrar el tipoProducto "Genérico" (id_tipoProducto = 1)
        if (id_tipoProducto === 1 ) {
            return res.status(403).json({ msg: "No se puede eliminar el tipo de producto 'Genérico'." })
        }

        const tipoProducto = await TipoProducto.findByPk(id_tipoProducto)
        
        if (!tipoProducto) {
            return res.status(404).json({ msg: "Tipo producto no encontrado." })
        } 

        // Actualiza todos los productos que contengan el tipoProducto a eliminar, asignándoles "Genérico"
        await Producto.update({ id_tipoProducto: 1 }, { where: { id_tipoProducto: id_tipoProducto } })
        
        // Borro el tipo producto
        await tipoProducto.destroy()

        return res.status(200).json({ msg: "Tipo producto eliminado correctamente." })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { deleteTipoProducto }