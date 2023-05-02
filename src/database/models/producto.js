'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Pedido, { through: 'PedidoProductos'});
      Producto.belongsToMany(models.Menu, { through: 'MenuProductos'});
      Producto.belongsToMany(models.Promocion, { through: { model: 'PromocionProductos', unique:false }});
      Producto.belongsTo(models.TipoProducto, { foreignKey: 'id_tipoProducto' });
    }
  }
  Producto.init({ 
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    id_tipoProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};