'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_producto', [
      { id_tipoProducto: 1, descripcion: "et incididunt pariatur nisi", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 2, descripcion: "in minim irure aute", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 3, descripcion: "voluptate do consectetur excepteur", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 4, descripcion: "fugiat reprehenderit incididunt cillum", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 5, descripcion: "magna excepteur esse enim", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 6, descripcion: "voluptate nostrud nostrud ad", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 7, descripcion: "ut sunt cupidatat laborum", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 8, descripcion: "commodo tempor dolore veniam", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_producto', null, {});
  }
};