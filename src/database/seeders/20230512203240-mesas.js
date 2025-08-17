'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mesas', [
      { id_mesa: 1, capacidad: 2, ubicacion: "Esquina escondida al fondo.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 2, capacidad: 6, ubicacion: "Junto a la ventana con vistas.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 3, capacidad: 4, ubicacion: "Cerca de la barra, al centro de la acción.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 4, capacidad: 2, ubicacion: "Esquina junto a la pared de ladrillos expuestos.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 5, capacidad: 6, ubicacion: "Ambiente tranquilo, bajo la lámpara antigua.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 6, capacidad: 4, ubicacion: "Junto a la pared oscura, perfecta para charlas privadas.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 7, capacidad: 2, ubicacion: "El rincón del explorador, entre los estantes de libro.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 8, capacidad: 6, ubicacion: "Al final del pasillo, junto al cuadro vintage.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 9, capacidad: 4, ubicacion: "El rincón secreto, al lado de la ventana.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 10, capacidad: 2, ubicacion: "Al frente, en el centro de la escena.", qr: " ", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('mesas', null, {});
  }
};