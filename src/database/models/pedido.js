"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Usuario, { foreignKey: "id_usuario" });
      Pedido.belongsToMany(models.Producto, {
        through: "PedidoProductos",
        foreignKey: "id_pedido",
      });
      Pedido.belongsTo(models.Mesa, { as: "Mesa", foreignKey: "id_mesa" });
      Pedido.belongsTo(models.ResumenDiarioUsuario, { as: 'resumenDiario', foreignKey: "id_resumenDiario", onUpdate: 'CASCADE', onDelete: 'SET NULL' });
    }
  }
  Pedido.init(
    {
      id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(50), // Los estados son: 'Pendiente' cuando se crea, 'Listo' cuando está para ser entregado al cliente, 'Entregado'
        allowNull: false,
        defaultValue: 'Pendiente', // Por defecto, un pedido se registra con el estado Pendiente
      },
      montoImporte: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      observacion: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      id_resumenDiario: {
        type: DataTypes.INTEGER,
        allowNull: true, // Va a ser nulo hasta que el resumen se cree al "Pedir la cuenta"
      },
    },
    {
      sequelize,
      createdAt: false,
      paranoid: true,
      modelName: "Pedido",
    }
  );
  return Pedido;
};
