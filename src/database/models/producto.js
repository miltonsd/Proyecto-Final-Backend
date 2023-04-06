'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
     static associate(models) {
       
    } 
  }
  Producto.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }}, {
    sequelize,
    modelName: 'Producto',
 });
  return Producto;
};