'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PedidoProductos extends Model {
    static associate(models) {
        PedidoProductos.belongsTo(models.Pedido, { foreignKey: 'id_pedido' });
        PedidoProductos.belongsTo(models.Producto, { foreignKey: 'id_producto'});
    } 
  }
  PedidoProductos.init({ 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
  }, {
    sequelize,
    modelName: 'PedidoProductos',
  });
  return PedidoProductos;
};