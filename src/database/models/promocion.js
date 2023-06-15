'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Promocion extends Model {
        static associate(models) {
            Promocion.belongsToMany(models.Producto, { through: { model: 'PromocionProductos', unique: false }, foreignKey: 'id_promocion' });
        }
    }
    Promocion.init({
        id_promocion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        porcentaje_desc: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fecha_desde: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_hasta: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Promocion',
        tableName: 'promociones'
    });
    return Promocion;
};