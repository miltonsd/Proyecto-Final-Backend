'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
     static associate(models) {
       
    } 
  }
  Pedido.init({ 
    fechaHoraPedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },montoImporte: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }}, {
    sequelize,
    modelName: 'Pedido',
 });
  return Pedido;
};