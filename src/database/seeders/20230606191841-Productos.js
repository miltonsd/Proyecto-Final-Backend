'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_producto', [
      { id_producto: 1, precio: 1800, stock: 100, descripcion: "Ensalada Mediterránea", imagen: "", id_tipoProducto: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 2, precio: 1000, stock: 100, descripcion: "Ensalada Mixta", imagen: "", id_tipoProducto: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 3, precio: 2000, stock: 100, descripcion: "Ensalada César", imagen: "", id_tipoProducto: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 4, precio: 500, stock: 100, descripcion: "Empanada de carne", imagen: "", id_tipoProducto: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 5, precio: 500, stock: 100, descripcion: "Empanada de jamón y queso", imagen: "", id_tipoProducto: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 6, precio: 3000, stock: 100, descripcion: "Tabla para 2 personas", imagen: "", id_tipoProducto: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 7, precio: 4500, stock: 100, descripcion: "Tabla para 4 personas", imagen: "", id_tipoProducto: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 8, precio: 1300, stock: 100, descripcion: "Papas fritas", imagen: "", id_tipoProducto: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 9, precio: 1000, stock: 100, descripcion: "Aros de cebolla", imagen: "", id_tipoProducto: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 10, precio: 1500, stock: 100, descripcion: "Rabas", imagen: "", id_tipoProducto: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 11, precio: 1800, stock: 100, descripcion: "Tostado", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 12, precio: 1800, stock: 100, descripcion: "Carlitos", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 13, precio: 2000, stock: 100, descripcion: "Carlitos de pollo", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 14, precio: 2000, stock: 100, descripcion: "Torpedo", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 15, precio: 2000, stock: 100, descripcion: "Hamburguesa simple", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 16, precio: 2500, stock: 100, descripcion: "Hamburguesa completa", imagen: "", id_tipoProducto: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 17, precio: 3000, stock: 100, descripcion: "Pasta (a elección)", imagen: "", id_tipoProducto: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 18, precio: 3000, stock: 100, descripcion: "Pollo", imagen: "", id_tipoProducto: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 19, precio: 4000, stock: 100, descripcion: "Carne roja", imagen: "", id_tipoProducto: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 20, precio: 3000, stock: 100, descripcion: "Pescado", imagen: "", id_tipoProducto: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 21, precio: 700, stock: 100, descripcion: "Porción de torta (a elección)", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 22, precio: 600, stock: 100, descripcion: "Bocha de helado (a elección)", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 23, precio: 600, stock: 100, descripcion: "Flan", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 25, precio: 350, stock: 100, descripcion: "Café negro", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 26, precio: 350, stock: 100, descripcion: "Cortado", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 27, precio: 350, stock: 100, descripcion: "Lágrima", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 28, precio: 300, stock: 100, descripcion: "Té", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 29, precio: 500, stock: 100, descripcion: "Submarino", imagen: "", id_tipoProducto: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 30, precio: 500, stock: 100, descripcion: "Gaseosa", imagen: "", id_tipoProducto: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 31, precio: 350, stock: 100, descripcion: "Agua/soda", imagen: "", id_tipoProducto: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 32, precio: 600, stock: 100, descripcion: "Jarra de limonada", imagen: "", id_tipoProducto: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 33, precio: 400, stock: 100, descripcion: "Jugo de naranja", imagen: "", id_tipoProducto: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 34, precio: 700, stock: 100, descripcion: "Cerveza rubia", imagen: "", id_tipoProducto: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 35, precio: 700, stock: 100, descripcion: "Cerveza roja", imagen: "", id_tipoProducto: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 36, precio: 700, stock: 100, descripcion: "Cerveza negra", imagen: "", id_tipoProducto: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 37, precio: 800, stock: 100, descripcion: "Cerveza artesanal", imagen: "", id_tipoProducto: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 38, precio: 1200, stock: 100, descripcion: "Vino", imagen: "", id_tipoProducto: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 39, precio: 3000, stock: 100, descripcion: "Vino premium", imagen: "", id_tipoProducto: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 40, precio: 2500, stock: 100, descripcion: "Champagne", imagen: "", id_tipoProducto: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 41, precio: 1800, stock: 100, descripcion: "Sidra", imagen: "", id_tipoProducto: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 42, precio: 1000, stock: 100, descripcion: "Caipiriña", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 43, precio: 1000, stock: 100, descripcion: "Caipiroska", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 44, precio: 1200, stock: 100, descripcion: "Negroni", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 45, precio: 1000, stock: 100, descripcion: "Mojito", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 46, precio: 1100, stock: 100, descripcion: "Daiquiri", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 47, precio: 1300, stock: 100, descripcion: "Gin", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 48, precio: 1000, stock: 100, descripcion: "Margarita", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 49, precio: 1500, stock: 100, descripcion: "Whiskey", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_producto: 50, precio: 1300, stock: 100, descripcion: "Vodka", imagen: "", id_tipoProducto: 9, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
