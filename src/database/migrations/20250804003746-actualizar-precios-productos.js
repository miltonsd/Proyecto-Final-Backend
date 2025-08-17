'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Nuevos precios para los productos
    const updates = [
      { id: 1, nuevoPrecio: 8000 },   // Ensalada Mediterránea
      { id: 2, nuevoPrecio: 5000 },   // Ensalada Mixta
      { id: 3, nuevoPrecio: 6000 },   // Ensalada César
      { id: 4, nuevoPrecio: 2500 },   // Empanada de carne
      { id: 5, nuevoPrecio: 2000 },   // Empanada de jamón y queso
      { id: 6, nuevoPrecio: 12000 },  // Tabla para 2 personas
      { id: 7, nuevoPrecio: 20000 },  // Tabla para 4 personas
      { id: 8, nuevoPrecio: 8000 },   // Papas fritas
      { id: 9, nuevoPrecio: 6000 },   // Aros de cebolla
      { id: 10, nuevoPrecio: 10000 }, // Rabas
      { id: 11, nuevoPrecio: 12000 }, // Tostado
      { id: 12, nuevoPrecio: 12000 }, // Carlitos
      { id: 13, nuevoPrecio: 13000 }, // Carlitos de pollo
      { id: 14, nuevoPrecio: 15000 }, // Torpedo
      { id: 15, nuevoPrecio: 11000 }, // Hamburguesa simple
      { id: 16, nuevoPrecio: 14000 }, // Hamburguesa completa
      { id: 17, nuevoPrecio: 20000 }, // Pasta (a elección)
      { id: 18, nuevoPrecio: 13000 }, // Pollo
      { id: 19, nuevoPrecio: 22000 }, // Carne roja
      { id: 20, nuevoPrecio: 18000 }, // Pescado
      { id: 21, nuevoPrecio: 7000 },  // Porción de torta (a elección)
      { id: 22, nuevoPrecio: 1500 },  // Bocha de helado (a elección)
      { id: 23, nuevoPrecio: 3000 },  // Flan
      { id: 25, nuevoPrecio: 2000 },  // Café negro
      { id: 26, nuevoPrecio: 2000 },  // Cortado
      { id: 27, nuevoPrecio: 2000 },  // Lágrima
      { id: 28, nuevoPrecio: 1600 },  // Té
      { id: 29, nuevoPrecio: 3500 },  // Submarino
      { id: 30, nuevoPrecio: 3500 },  // Gaseosa
      { id: 31, nuevoPrecio: 3100 },  // Agua/soda
      { id: 32, nuevoPrecio: 6500 },  // Jarra de limonada
      { id: 33, nuevoPrecio: 2500 },  // Jugo de naranja
      { id: 34, nuevoPrecio: 4000 },  // Cerveza rubia
      { id: 35, nuevoPrecio: 4000 },  // Cerveza roja
      { id: 36, nuevoPrecio: 4000 },  // Cerveza negra
      { id: 37, nuevoPrecio: 4500 },  // Cerveza artesanal
      { id: 38, nuevoPrecio: 8000 },  // Vino
      { id: 39, nuevoPrecio: 12000 }, // Vino premium
      { id: 40, nuevoPrecio: 18000 }, // Champagne
      { id: 41, nuevoPrecio: 10000 }, // Sidra
      { id: 42, nuevoPrecio: 8500 },  // Caipiriña
      { id: 43, nuevoPrecio: 8500 },  // Caipiroska
      { id: 44, nuevoPrecio: 10000 }, // Negroni
      { id: 45, nuevoPrecio: 8500 },  // Mojito
      { id: 46, nuevoPrecio: 8500 },  // Daiquiri
      { id: 47, nuevoPrecio: 10000 }, // Gin
      { id: 48, nuevoPrecio: 8000 },  // Margarita
      { id: 49, nuevoPrecio: 11000 }, // Whiskey
      { id: 50, nuevoPrecio: 9500 },  // Vodka
    ]

    // Iteración para actualizar los precios de los productos
    for (const upd of updates) {
      await queryInterface.bulkUpdate('productos', { precio: upd.nuevoPrecio }, { id_producto: upd.id } )
    }
  },

  async down (queryInterface, Sequelize) {
    // Viejos precios para los productos
    const reversions = [
      { id: 1, precioOriginal: 1800 },  // Ensalada Mediterránea
      { id: 2, precioOriginal: 1000 },  // Ensalada Mixta
      { id: 3, precioOriginal: 2000 },  // Ensalada César
      { id: 4, precioOriginal: 500 },   // Empanada de carne
      { id: 5, precioOriginal: 500 },   // Empanada de jamón y queso
      { id: 6, precioOriginal: 3000 },  // Tabla para 2 personas
      { id: 7, precioOriginal: 4500 },  // Tabla para 4 personas
      { id: 8, precioOriginal: 1300 },  // Papas fritas
      { id: 9, precioOriginal: 1000 },  // Aros de cebolla
      { id: 10, precioOriginal: 1500 }, // Rabas
      { id: 11, precioOriginal: 1800 }, // Tostado
      { id: 12, precioOriginal: 1800 }, // Carlitos
      { id: 13, precioOriginal: 2000 }, // Carlitos de pollo
      { id: 14, precioOriginal: 2000 }, // Torpedo
      { id: 15, precioOriginal: 2000 }, // Hamburguesa simple
      { id: 16, precioOriginal: 2500 }, // Hamburguesa completa
      { id: 17, precioOriginal: 3000 }, // Pasta (a elección)
      { id: 18, precioOriginal: 3000 }, // Pollo
      { id: 19, precioOriginal: 4000 }, // Carne roja
      { id: 20, precioOriginal: 3000 }, // Pescado
      { id: 21, precioOriginal: 700 },  // Porción de torta (a elección)
      { id: 22, precioOriginal: 600 },  // Bocha de helado (a elección)
      { id: 23, precioOriginal: 600 },  // Flan
      { id: 25, precioOriginal: 350 },  // Café negro
      { id: 26, precioOriginal: 350 },  // Cortado
      { id: 27, precioOriginal: 350 },  // Lágrima
      { id: 28, precioOriginal: 300 },  // Té
      { id: 29, precioOriginal: 500 },  // Submarino
      { id: 30, precioOriginal: 500 },  // Gaseosa
      { id: 31, precioOriginal: 350 },  // Agua/soda
      { id: 32, precioOriginal: 600 },  // Jarra de limonada
      { id: 33, precioOriginal: 400 },  // Jugo de naranja
      { id: 34, precioOriginal: 700 },  // Cerveza rubia
      { id: 35, precioOriginal: 700 },  // Cerveza roja
      { id: 36, precioOriginal: 700 },  // Cerveza negra
      { id: 37, precioOriginal: 800 },  // Cerveza artesanal
      { id: 38, precioOriginal: 1200 }, // Vino
      { id: 39, precioOriginal: 3000 }, // Vino premium
      { id: 40, precioOriginal: 2500 }, // Champagne
      { id: 41, precioOriginal: 1800 }, // Sidra
      { id: 42, precioOriginal: 1000 }, // Caipiriña
      { id: 43, precioOriginal: 1000 }, // Caipiroska
      { id: 44, precioOriginal: 1200 }, // Negroni
      { id: 45, precioOriginal: 1000 }, // Mojito
      { id: 46, precioOriginal: 1100 }, // Daiquiri
      { id: 47, precioOriginal: 1300 }, // Gin
      { id: 48, precioOriginal: 1000 }, // Margarita
      { id: 49, precioOriginal: 1500 }, // Whiskey
      { id: 50, precioOriginal: 1300 }, // Vodka
    ]

    // Iteración para revertir los cambios de los precios de los productos
    for (const rev of reversions) {
      await queryInterface.bulkUpdate('productos', { precio: rev.precioOriginal }, { id_producto: rev.id } )
    }
  }
};
