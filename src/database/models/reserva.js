'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {} 
  }
  Reserva.init({ 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    }
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};