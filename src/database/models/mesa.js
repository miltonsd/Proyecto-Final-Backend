"use strict";

const { Model } = require("sequelize");

/**
 * @swagger
 * components:
 *   schemas:
 *     Mesa:
 *       type: object
 *       properties:
 *         id_mesa:
 *           type: integer
 *           readOnly: true
 *         capacidad:
 *           type: integer
 *           minimum: 2
 *           maximum: 6
 *         ubicacion:
 *           type: string
 *         habilitada:
 *           type: boolean
 *           default: false
 *         qr:
 *           type: string
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
  class Mesa extends Model {
    static associate(models) {
      Mesa.hasMany(models.Reserva, {
        foreignKey: "id_mesa",
        onDelete: "NO ACTION",
      });
      Mesa.hasMany(models.Pedido, {
        foreignKey: "id_mesa",
        onDelete: "CASCADE",
      });
    }
  }
  Mesa.init(
    {
      id_mesa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 2, max: 6 },
      },
      ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      habilitada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      qr: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Mesa",
    }
  );
  return Mesa;
};
