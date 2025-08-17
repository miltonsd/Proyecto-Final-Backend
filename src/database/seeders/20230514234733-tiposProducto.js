'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_producto', [
      // Tipo producto genérico cuando un producto no tiene asignado un tipo de producto específico y/o cuando se borra el tipo producto al que pertenecía
      { id_tipoProducto: 1, descripcion: "Genérico", imagen: "../../img/tipoProducto/generico.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 2, descripcion: "Ensaladas y entradas", imagen: "../../img/tipoProducto/ensaladasEntradas.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 3, descripcion: "Para picar", imagen: "../../img/tipoProducto/paraPicar.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 4, descripcion: "Sandwiches", imagen: "../../img/tipoProducto/sandwiches.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 5, descripcion: "Platos principales", imagen: "../../img/tipoProducto/platosPrincipales.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 6, descripcion: "Postres y cafetería", imagen: "../../img/tipoProducto/postresCafeteria.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 7, descripcion: "Bebidas sin alcohol", imagen: "../../img/tipoProducto/bebidasSinAlcohol.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 8, descripcion: "Cervezas", imagen: "../../img/tipoProducto/cervezas.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 9, descripcion: "Vinos y espumantes", imagen: "../../img/tipoProducto/vinosEspumantes.webp", createdAt: new Date(), updatedAt: new Date() },
      { id_tipoProducto: 10, descripcion: "Tragos", imagen: "../../img/tipoProducto/tragos.webp", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_producto', null, {});
  }
};