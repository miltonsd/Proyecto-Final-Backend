'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PromocionProductos extends Model {
        static associate(models) {
            PromocionProductos.belongsTo(models.Promocion, { foreignKey: 'id_promocion' });
            PromocionProductos.belongsTo(models.Producto, { foreignKey: 'id_producto' });
        } 
    }
    PromocionProductos.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_promocion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: 'id_promocion_id_producto',
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: 'id_promocion_id_producto'
        }, 
    }, {
        sequelize,
        paranoid: true,
        modelName: 'PromocionProductos',
    });
    return PromocionProductos;
};