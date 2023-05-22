'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        static associate(models) {
            Categoria.hasMany(models.Usuario, { foreignKey: 'id_categoria', onDelete: 'NO ACTION' });
        } 
    }
    Categoria.init({
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Categoria',
        tableName: 'categorias',
    });
    return Categoria;
};