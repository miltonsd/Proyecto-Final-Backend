'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Usuario, { 
        foreignKey: 'cod_categoria',
        onDelete: 'NO ACTION',
      });
    } 
  }
  Categoria.init({ 
    cod_categoria: {
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
    modelName: 'Categoria',
    tableName: 'categorias',
  });
  return Categoria;
};