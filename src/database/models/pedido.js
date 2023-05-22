'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pedido extends Model {
        static associate(models) {
            Pedido.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
            Pedido.belongsToMany(models.Producto, { through: 'PedidoProductos' });
        }
    }
    Pedido.init({
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaHoraPedido: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        montoImporte: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Pedido',
    });
    return Pedido;
};