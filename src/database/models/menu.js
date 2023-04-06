'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
     static associate(models) {
       
    } 
  }
  Menu.init({ 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Menu',
 });
  return Menu;
};