'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     MenuProductos:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *         id_menu:
 *           type: integer
 *         id_producto:
 *           type: integer
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
    class MenuProductos extends Model {
        static associate(models) {
            MenuProductos.belongsTo(models.Menu, { foreignKey: 'id_menu' });
            MenuProductos.belongsTo(models.Producto, { foreignKey: 'id_producto' });
        } 
    }
    MenuProductos.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_menu: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
    }, {
        sequelize,
        paranoid: true,
        modelName: 'MenuProductos',
    });
    return MenuProductos;
};