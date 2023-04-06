 'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
     static associate(models) {
       
    } 
  }
  Reserva.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fechaHora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cant_personas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    }}, {
    sequelize,
    modelName: 'Reserva',
 });
  return Reserva;
};