'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    static associate(models) {
      Estado.hasMany(models.Usuario, { foreignKey: 'id_estado', onDelete: 'NO ACTION' });
    }
  }
  Estado.init({
    id_estado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Estado',
  });
  return Estado;
};