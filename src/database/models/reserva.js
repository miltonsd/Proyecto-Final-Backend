'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Usuario, { as: 'Usuario', foreignKey: 'id_usuario' });
      Reserva.belongsTo(models.Mesa, { as: 'Mesa', foreignKey: 'id_mesa' });
    } 
  }
  Reserva.init({ 
    id_reserva: {
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
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_mesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};