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
    modelName: 'tipoProducto',
    tableName: 'tipos_producto'
 });
  return tipoProducto;
};