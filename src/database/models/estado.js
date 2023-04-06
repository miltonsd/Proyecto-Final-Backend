"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    static associate(models) {
      Estado.hasMany(models.Usuario, { foreignKey: "cod_estado" });
    }
  }
  Estado.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Estado",
    }
  );
  return Estado;
};
