'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      { id: 1, descripcion: 'AS', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, descripcion: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, descripcion: 'Mozo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};