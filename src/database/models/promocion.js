'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Promocion:
 *       type: object
 *       properties:
 *         id_promocion:
 *           type: integer
 *           readOnly: true
 *         porcentaje_desc:
 *           type: number
 *           format: float  
 *         fecha_desde:
 *           type: string
 *           format: date-time
 *         fecha_hasta:
 *           type: string
 *           format: date-time
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