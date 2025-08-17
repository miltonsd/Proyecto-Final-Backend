'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      { id_categoria: 1, descripcion: 'Cliente Básico', createdAt: new Date(), updatedAt: new Date() },
      { id_categoria: 2, descripcion: 'Cliente GOLD', createdAt: new Date(), updatedAt: new Date() },
      { id_categoria: 3, descripcion: 'Cliente PLATINUM', createdAt: new Date(), updatedAt: new Date() },
      { id_categoria: 4, descripcion: 'Cliente BLACK', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};