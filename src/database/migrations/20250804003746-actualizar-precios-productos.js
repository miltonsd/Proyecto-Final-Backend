'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Nuevos precios para los productos
    const actualizaciones = [
      { id_producto: 1, precio: 8000 },   // Ensalada Mediterránea
      { id_producto: 2, precio: 5000 },   // Ensalada Mixta
      { id_producto: 3, precio: 6000 },   // Ensalada César
      { id_producto: 4, precio: 2500 },   // Empanada de carne
      { id_producto: 5, precio: 2000 },   // Empanada de jamón y queso
      { id_producto: 6, precio: 12000 },  // Tabla para 2 personas
      { id_producto: 7, precio: 20000 },  // Tabla para 4 personas
      { id_producto: 8, precio: 8000 },   // Papas fritas
      { id_producto: 9, precio: 6000 },   // Aros de cebolla
      { id_producto: 10, precio: 10000 }, // Rabas
      { id_producto: 11, precio: 12000 }, // Tostado
      { id_producto: 12, precio: 12000 }, // Carlitos
      { id_producto: 13, precio: 13000 }, // Carlitos de pollo
      { id_producto: 14, precio: 15000 }, // Torpedo
      { id_producto: 15, precio: 11000 }, // Hamburguesa simple
      { id_producto: 16, precio: 14000 }, // Hamburguesa completa
      { id_producto: 17, precio: 20000 }, // Pasta (a elección)
      { id_producto: 18, precio: 13000 }, // Pollo
      { id_producto: 19, precio: 22000 }, // Carne roja
      { id_producto: 20, precio: 18000 }, // Pescado
      { id_producto: 21, precio: 7000 },  // Porción de torta (a elección)
      { id_producto: 22, precio: 1500 },  // Bocha de helado (a elección)
      { id_producto: 23, precio: 3000 },  // Flan
      { id_producto: 25, precio: 2000 },  // Café negro
      { id_producto: 26, precio: 2000 },  // Cortado
      { id_producto: 27, precio: 2000 },  // Lágrima
      { id_producto: 28, precio: 1600 },  // Té
      { id_producto: 29, precio: 3500 },  // Submarino
      { id_producto: 30, precio: 3500 },  // Gaseosa
      { id_producto: 31, precio: 3100 },  // Agua/soda
      { id_producto: 32, precio: 6500 },  // Jarra de limonada
      { id_producto: 33, precio: 2500 },  // Jugo de naranja
      { id_producto: 34, precio: 4000 },  // Cerveza rubia
      { id_producto: 35, precio: 4000 },  // Cerveza roja
      { id_producto: 36, precio: 4000 },  // Cerveza negra
      { id_producto: 37, precio: 4500 },  // Cerveza artesanal
      { id_producto: 38, precio: 8000 },  // Vino
      { id_producto: 39, precio: 12000 }, // Vino premium
      { id_producto: 40, precio: 18000 }, // Champagne
      { id_producto: 41, precio: 10000 }, // Sidra
      { id_producto: 42, precio: 8500 },  // Caipiriña
      { id_producto: 43, precio: 8500 },  // Caipiroska
      { id_producto: 44, precio: 10000 }, // Negroni
      { id_producto: 45, precio: 8500 },  // Mojito
      { id_producto: 46, precio: 8500 },  // Daiquiri
      { id_producto: 47, precio: 10000 }, // Gin
      { id_producto: 48, precio: 8000 },  // Margarita
      { id_producto: 49, precio: 11000 }, // Whiskey
      { id_producto: 50, precio: 9500 },  // Vodka
    ]

    // Iteración para actualizar los precios de los productos
    for (const act of actualizaciones) {
      await queryInterface.bulkUpdate('productos', act.precio, act.id_producto)
    }
  },

  async down (queryInterface, Sequelize) {
    // Viejos precios para los productos
    const reversiones = [
      { id_producto: 1, precio: 1800 },  // Ensalada Mediterránea
      { id_producto: 2, precio: 1000 },  // Ensalada Mixta
      { id_producto: 3, precio: 2000 },  // Ensalada César
      { id_producto: 4, precio: 500 },   // Empanada de carne
      { id_producto: 5, precio: 500 },   // Empanada de jamón y queso
      { id_producto: 6, precio: 3000 },  // Tabla para 2 personas
      { id_producto: 7, precio: 4500 },  // Tabla para 4 personas
      { id_producto: 8, precio: 1300 },  // Papas fritas
      { id_producto: 9, precio: 1000 },  // Aros de cebolla
      { id_producto: 10, precio: 1500 }, // Rabas
      { id_producto: 11, precio: 1800 }, // Tostado
      { id_producto: 12, precio: 1800 }, // Carlitos
      { id_producto: 13, precio: 2000 }, // Carlitos de pollo
      { id_producto: 14, precio: 2000 }, // Torpedo
      { id_producto: 15, precio: 2000 }, // Hamburguesa simple
      { id_producto: 16, precio: 2500 }, // Hamburguesa completa
      { id_producto: 17, precio: 3000 }, // Pasta (a elección)
      { id_producto: 18, precio: 3000 }, // Pollo
      { id_producto: 19, precio: 4000 }, // Carne roja
      { id_producto: 20, precio: 3000 }, // Pescado
      { id_producto: 21, precio: 700 },  // Porción de torta (a elección)
      { id_producto: 22, precio: 600 },  // Bocha de helado (a elección)
      { id_producto: 23, precio: 600 },  // Flan
      { id_producto: 25, precio: 350 },  // Café negro
      { id_producto: 26, precio: 350 },  // Cortado
      { id_producto: 27, precio: 350 },  // Lágrima
      { id_producto: 28, precio: 300 },  // Té
      { id_producto: 29, precio: 500 },  // Submarino
      { id_producto: 30, precio: 500 },  // Gaseosa
      { id_producto: 31, precio: 350 },  // Agua/soda
      { id_producto: 32, precio: 600 },  // Jarra de limonada
      { id_producto: 33, precio: 400 },  // Jugo de naranja
      { id_producto: 34, precio: 700 },  // Cerveza rubia
      { id_producto: 35, precio: 700 },  // Cerveza roja
      { id_producto: 36, precio: 700 },  // Cerveza negra
      { id_producto: 37, precio: 800 },  // Cerveza artesanal
      { id_producto: 38, precio: 1200 }, // Vino
      { id_producto: 39, precio: 3000 }, // Vino premium
      { id_producto: 40, precio: 2500 }, // Champagne
      { id_producto: 41, precio: 1800 }, // Sidra
      { id_producto: 42, precio: 1000 }, // Caipiriña
      { id_producto: 43, precio: 1000 }, // Caipiroska
      { id_producto: 44, precio: 1200 }, // Negroni
      { id_producto: 45, precio: 1000 }, // Mojito
      { id_producto: 46, precio: 1100 }, // Daiquiri
      { id_producto: 47, precio: 1300 }, // Gin
      { id_producto: 48, precio: 1000 }, // Margarita
      { id_producto: 49, precio: 1500 }, // Whiskey
      { id_producto: 50, precio: 1300 }, // Vodka
    ]

    // Iteración para revertir los cambios de los precios de los productos
    for (const rev of reversiones) {
      await queryInterface.bulkUpdate('productos', rev.precio, rev.id_producto)
    }
  }
};
