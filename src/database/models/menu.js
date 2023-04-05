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
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Menu',
 });
  return Menu;
};