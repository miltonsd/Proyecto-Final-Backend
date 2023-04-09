'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tipoProducto extends Model {
    static associate(models) {}
  }
  tipoProducto.init({ 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'tipoProducto',
    tableName: 'tipos_producto'
  });
  return tipoProducto;
};