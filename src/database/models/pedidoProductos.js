'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PedidoProductos extends Model {
        static associate(models) {
            PedidoProductos.belongsTo(models.Pedido, { foreignKey: 'id_pedido', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
            PedidoProductos.belongsTo(models.Producto, { foreignKey: 'id_producto', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
        }
    }
    PedidoProductos.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad_prod: { // El pedido puede tener un producto con una cantidad pedida mayor a 1
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio_unitario: { // El precio x unidad del producto AL MOMENTO de realizar el pedido, ya que el precio se puede ir modificando con el tiempo
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'PedidoProductos',
    });
    return PedidoProductos;
};