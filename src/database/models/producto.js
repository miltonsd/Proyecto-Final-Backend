'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id_producto:
 *           type: integer
 *           readOnly: true
 *         precio:
 *           type: number
 *           format: float  
 *         stock:
 *           type: integer
 *         descripcion:
 *           type: string
 *         detalle:
 *           type: string
 *         imagen:
 *           type: string
 *         id_tipoProducto:
 *           type: integer
 *           default: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

module.exports = (sequelize, DataTypes) => {
    class Producto extends Model {
        static associate(models) {
            Producto.belongsToMany(models.Pedido, { through: 'PedidoProductos', foreignKey: 'id_producto' });
            Producto.belongsToMany(models.Menu, { through: 'MenuProductos', foreignKey: 'id_producto' });
            Producto.belongsToMany(models.Promocion, { through: { model: 'PromocionProductos', unique: false }, foreignKey: 'id_producto' });
            Producto.belongsTo(models.TipoProducto, { foreignKey: 'id_tipoProducto' });
        }
    }
    Producto.init({
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcion: { //La descripción es el título/nombre del producto
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        detalle: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        id_tipoProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1 // Lo crea como genérico
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Producto',
    });
    return Producto;
};