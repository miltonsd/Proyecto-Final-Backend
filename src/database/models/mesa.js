'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mesa extends Model {
    static associate(models) {
      Mesa.hasMany(models.Reserva, { foreignKey: 'id_mesa', onDelete: 'NO ACTION'});
    }
  }
  Mesa.init({ 
    id_mesa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Mesa',
  });
  return Mesa;
};