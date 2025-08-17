'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Se agrega un nuevo producto con el id 24 ya que no existe ninguno en la base de datos
    const nuevoProducto = {
      id_producto: 24,
      precio: 2000,
      stock: 100,
      descripcion: "Porción de budín (a elección)",
      detalle: "Opciones: Limón, chocolate, naranja, marmolado, dulce de leche.",
      imagen: "../../img/producto/budin.png",
      id_tipoProducto: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await queryInterface.bulkInsert('productos', [nuevoProducto], {});
  },

  async down (queryInterface, Sequelize) {
    // Elimina el producto agregado en el método up
    await queryInterface.bulkDelete('productos', { id_producto: 24 }, {});
  }
};
