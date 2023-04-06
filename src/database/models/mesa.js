'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesa extends Model {
     static associate(models) {
       
    } 
  }
  Mesa.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Mesa',
 });
  return Mesa;
};