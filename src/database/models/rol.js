'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
     static associate(models) {
       Rol.hasMany(models.Usuario, {foreignKey: 'cod_rol'}); 
    } 
  }
  Rol.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Rol',
    tableName: 'roles'
 });
  return Rol;
};