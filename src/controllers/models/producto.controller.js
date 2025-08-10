const { Op } = require('sequelize');
const { Producto, TipoProducto, MenuProductos, PromocionProductos, PedidoProductos, Promocion } = require('../../database/models/index');

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

const getAllProductosCarta = async (req, res) => {
    try {
        const productos = await Producto.findAll({
            // Incluye los datos del tipo de producto
            include: [
                { 
                    model: Promocion,
                    // LEFT JOIN para que los productos sin promoción también se incluyan
                    required: false,
                    // Condición para filtrar solo las promociones vigentes
                    where: {
                        fecha_desde: { [Op.lte]: new Date() }, // Fecha desde menor o igual a hoy
                        fecha_hasta: { [Op.gte]: new Date() } // Fecha hasta mayor o igual a hoy
                    },
                    // Atributos a incluir de la promoción
                    attributes: ['id_promocion', 'porcentaje_desc', 'fecha_desde', 'fecha_hasta'],
                    through: { attributes: [] } // Excluir atributos de la tabla intermedia
                },
                { 
                    model: TipoProducto, 
                    attributes: ['id_tipoProducto', 'descripcion'] 
                }, 
            ],
            attributes: ['id_producto', 'descripcion', 'precio', 'stock', 'imagen', 'detalle'],
            // paranoid: false,
            order: [['id_producto', 'ASC']] // Ordena por id_producto ascendente
        });
        if (productos.length === 0) {
            return res.status(404).json({ msg: 'Productos no encontrados.' });
        }

        // Mapea y procesa los resultados para calcular el precio final
        const productosConPromo = productos.map(producto => {
            // Convierte el objeto de Sequelize a un objeto plano
            const productoPlain = producto.get({ plain: true })
            const precioOriginal = productoPlain.precio
            const promocion = productoPlain.Promocions[0]

            // Crea el objeto de respuesta final
            const productoFinal = {
                id_producto: productoPlain.id_producto,
                descripcion: productoPlain.descripcion,
                precio_original: precioOriginal,
                stock: productoPlain.stock,
                imagen: productoPlain.imagen,
                detalle: productoPlain.detalle,
                id_tipoProducto: productoPlain.TipoProducto.id_tipoProducto,
                tipoProducto: productoPlain.TipoProducto.descripcion,
            };

            // Si el producto tiene una promoción, agrega los datos de la promoción y el precio con descuento
            if (promocion && promocion.porcentaje_desc) {
                const precioConDescuento = precioOriginal - (precioOriginal * promocion.porcentaje_desc)
                productoFinal.promocion = {
                    precio_con_descuento: precioConDescuento,
                    porcentaje_descuento: promocion.porcentaje_desc,
                    fecha_desde: promocion.fecha_desde,
                    fecha_hasta: promocion.fecha_hasta,
                }
            } else {
                productoFinal.promocion = null
            }
            return productoFinal
        })    
        return await res.status(200).json(productosConPromo);
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

module.exports = { getAllProductos, getOneProducto, getAllProductosCarta, deleteProducto }