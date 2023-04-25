'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      { id_rol: 1, descripcion: 'AS', createdAt: new Date(), updatedAt: new Date() },
      { id_rol: 2, descripcion: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
      { id_rol: 3, descripcion: 'Mozo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};