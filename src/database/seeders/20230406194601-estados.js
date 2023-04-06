'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estados', [
      { id:1, descripcion: 'No confirmado', createdAt: new Date(), updatedAt: new Date() },
      { id:2, descripcion: 'Confirmado', createdAt: new Date(), updatedAt: new Date()  },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estados', null, {});
  }
};
