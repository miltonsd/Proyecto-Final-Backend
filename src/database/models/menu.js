'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       properties:
 *         id_menu:
 *           type: integer
 *           readOnly: true
 *         titulo:
 *           type: string
 *         id_usuario:
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
    class Menu extends Model {
        static associate(models) {
            Menu.belongsTo(models.Usuario, { as: 'Usuario', foreignKey: 'id_usuario' });
            Menu.belongsToMany(models.Producto, { through: 'MenuProductos', foreignKey: 'id_menu' });
        } 
    }
    Menu.init({
        id_menu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Menu',
    });
    return Menu;
};