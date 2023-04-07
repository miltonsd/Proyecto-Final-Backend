'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
     static associate(models) {
      Categoria.hasMany(models.Usuario, { foreignKey: "cod_categoria" });
    } 
  }
  Categoria.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias'
 });
  return Categoria;
};