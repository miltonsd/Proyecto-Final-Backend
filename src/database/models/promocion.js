'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocion extends Model {
     static associate(models) {
       
    } 
  }
  Promocion.init({ 
    porcentaje_desc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_desde: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_hasta: {
        type: DataTypes.DATE,
        allowNull: false,
    }}, {
    sequelize,
    modelName: 'Promocion',
 });
  return Promocion;
};