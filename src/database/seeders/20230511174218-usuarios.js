'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { 
        id_usuario: 1, 
        nombre: 'Admin', 
        apellido: 'Admin', 
        email: 'admin@gmail.com', 
        contraseña: 'admin123', 
        isConfirmado: true,
        documento: '12345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2023-05-11',
        id_rol: 1,
        id_categoria: 4,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id_usuario: 2, 
        nombre: 'Mozo', 
        apellido: 'Mozo', 
        email: 'mozo@gmail.com', 
        contraseña: 'mozo123', 
        isConfirmado: true,
        documento: '22345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2023-05-11',
        id_rol: 3,
        id_categoria: 4,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id_usuario: 3, 
        nombre: 'Usuario', 
        apellido: 'Usuario', 
        email: 'usuario@gmail.com', 
        contraseña: 'usuario123', 
        isConfirmado: false,
        documento: '32345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2023-05-11',
        id_rol: 2,
        id_categoria: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};