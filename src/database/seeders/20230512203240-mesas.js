'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mesas', [
      { id_mesa: 1, capacidad: 2, ubicacion: "incididunt reprehenderit", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 2, capacidad: 6, ubicacion: "culpa velit", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 3, capacidad: 4, ubicacion: "voluptate ipsum", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 4, capacidad: 2, ubicacion: "ad eiusmod", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 5, capacidad: 6, ubicacion: "qui consectetur", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 6, capacidad: 4, ubicacion: "minim aute", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 7, capacidad: 2, ubicacion: "occaecat amet", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 8, capacidad: 6, ubicacion: "excepteur aliqua", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 9, capacidad: 4, ubicacion: "anim voluptate", qr: " ", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 10, capacidad: 2, ubicacion: "culpa exercitation", qr: " ", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('mesas', null, {});
  }
};