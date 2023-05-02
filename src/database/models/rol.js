'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasMany(models.Usuario, { foreignKey: 'id_rol', onDelete: 'NO ACTION' });
    }
  }
  Rol.init({ 
    id_rol: {
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
    modelName: 'Rol',
    tableName: 'roles'
  });
  return Rol;
};