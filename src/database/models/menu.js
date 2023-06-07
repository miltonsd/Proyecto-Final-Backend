'use strict';

const { Model } = require('sequelize');

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