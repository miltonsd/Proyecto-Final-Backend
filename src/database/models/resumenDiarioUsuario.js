"use strict";

const { Model } = require("sequelize");

/**
 * @swagger
 * components:
 *   schemas:
 *     ResumenDiarioUsuario:
 *       type: object
 *       properties:
 *         id_resumenDiario:
 *           type: integer
 *           readOnly: true
 *         fechaHora:
 *           type: string
 *           format: date-time  
 *         montoTotal:
 *           type: number
 *           format: float
 *         id_usuario:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

module.exports = (sequelize, DataTypes) => {
  class ResumenDiarioUsuario extends Model {
    static associate(models) {
      ResumenDiarioUsuario.belongsTo(models.Usuario, { foreignKey: "id_usuario" });
      ResumenDiarioUsuario.hasMany(models.Pedido, { as: 'Pedidos', foreignKey: "id_resumenDiario", onUpdate: 'CASCADE', onDelete: 'SET NULL' });
    }
  }
  ResumenDiarioUsuario.init(
    {
      id_resumenDiario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      montoTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      createdAt: false,
      paranoid: true,
      modelName: "ResumenDiarioUsuario",
    }
  );
  return ResumenDiarioUsuario;
};
