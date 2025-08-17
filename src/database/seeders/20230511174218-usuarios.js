'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { 
        id_usuario: 1, 
        nombre: 'Admin', 
        apellido: 'Admin', 
        email: 'admin@gmail.com', 
        contraseña: bcrypt.hashSync('admin123'), 
        isConfirmado: true,
        documento: '12345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2008-07-05',
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
        contraseña: bcrypt.hashSync('mozo123'), 
        isConfirmado: true,
        documento: '22345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2008-07-04',
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
        contraseña: bcrypt.hashSync('usuario123'), 
        isConfirmado: true,
        documento: '32345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2008-07-03',
        id_rol: 2,
        id_categoria: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id_usuario: 4, 
        nombre: 'Cocina', 
        apellido: 'Cocina', 
        email: 'cocina@gmail.com', 
        contraseña: bcrypt.hashSync('cocina123'), 
        isConfirmado: true,
        documento: '42345678', 
        direccion: 'Calle 123', 
        telefono: '1111111',
        fechaNacimiento: '2008-07-03',
        id_rol: 4,
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