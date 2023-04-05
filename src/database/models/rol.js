'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
     static associate(models) {
       Rol.hasMany(models.Usuario, {foreignKey: 'id_rol'}); 
    } 
  }
  Estado.init({ 
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Rol',
 });
  return Rol;
};