'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mesas', [
      { id_mesa: 1, capacidad: 2, ubicacion: "incididunt reprehenderit", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 2, capacidad: 6, ubicacion: "culpa velit", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 3, capacidad: 4, ubicacion: "voluptate ipsum", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 4, capacidad: 12, ubicacion: "ad eiusmod", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 5, capacidad: 16, ubicacion: "qui consectetur", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 6, capacidad: 4, ubicacion: "minim aute", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 7, capacidad: 8, ubicacion: "occaecat amet", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 8, capacidad: 10, ubicacion: "excepteur aliqua", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 9, capacidad: 10, ubicacion: "anim voluptate", createdAt: new Date(), updatedAt: new Date() },
      { id_mesa: 10, capacidad: 8, ubicacion: "culpa exercitation", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('mesas', null, {});
  }
};
