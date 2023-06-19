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
      isPendiente: {
        type: DataTypes.BOOLEAN, // si isPendiente = false, se entregó el pedido // En MySQL true = 1, false = 0
        allowNull: false,
        defaultValue: true, // Por defecto, un pedido se registra con el estado Pendiente
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
