"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Usuario, {
        as: "Usuario",
        foreignKey: "id_usuario",
      });
      Reserva.belongsTo(models.Mesa, { as: "Mesa", foreignKey: "id_mesa" });
    }
  }
  Reserva.init(
    {
      id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          validarHora(valor) {
            const hora = valor.toTimeString().substring(0, 5);
            const horasReservas = [
              "18:00",
              "19:00",
              "20:00",
              "21:00",
              "22:00",
              "23:00",
            ];
            if (!horasReservas.includes(hora)) {
              throw new Error("Hora inválida");
            }
          },
        },
      },
      cant_personas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 6 },
      },
      isPendiente: {
        type: DataTypes.BOOLEAN, // si isPendiente = false, se llevo a cabo la reserva // En MySQL true = 1, false = 0
        allowNull: false,
        defaultValue: true, // Por defecto, una reserva se registra con el estado Pendiente
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Reserva",
    }
  );
  return Reserva;
};
