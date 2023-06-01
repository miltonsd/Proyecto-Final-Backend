'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TipoProducto extends Model {
        static associate(models) {
            TipoProducto.hasMany(models.Producto, { foreignKey: 'id_tipoProducto', onDelete: 'NO ACTION' });
        }
    }
    TipoProducto.init({
        id_tipoProducto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(250),
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'TipoProducto',
        tableName: 'tipos_producto'
    });
    return TipoProducto;
};