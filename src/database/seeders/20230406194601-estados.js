'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estados', [
      { id_estado: 1, descripcion: 'No confirmado', createdAt: new Date(), updatedAt: new Date() },
      { id_estado: 2, descripcion: 'Confirmado', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estados', null, {});
  }
};