'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_producto', [
      { id_tipoProducto: 1, descripcion: "Ensaladas y entradas", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943229423960136/001.jpg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 2, descripcion: "Para picar", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943241482584145/636d2e0636819.jpg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 3, descripcion: "Sandwiches y pizzas", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943229050671216/003.jpg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 4, descripcion: "Platos principales", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943241927176272/5ffe098f5b78e.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 5, descripcion: "Postres y cafetería", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943228195029103/HD-wallpaper-mid-morning-coffee-good-morning-coffee-chocolate-cakes-desserts-cups-refreshments.jpg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 6, descripcion: "Bebidas sin alcohol", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943803238293585/739763.jpg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 7, descripcion: "Cervezas", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943241725841428/tomar-cerveza.jpeg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 8, descripcion: "Vinos y espumantes", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1114274915852484728/thumb_59390_default_big.jpeg", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 9, descripcion: "Tragos", imagen: "https://cdn.discordapp.com/attachments/956985601226338411/1113943228589285477/006.jpg", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_producto', null, {});
  }
};