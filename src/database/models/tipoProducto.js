'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoProducto extends Model {
     static associate(models) {
       
    } 
  }
  tipoProducto.init({ 
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'tipoProducto',
 });
  return tipoProducto;
};