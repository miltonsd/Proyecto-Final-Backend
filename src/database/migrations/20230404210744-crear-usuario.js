'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('usuarios', {id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    contraseña: {
      type: Sequelize.STRING,
      allowNull: false
    },
    documento: {
      type: Sequelize.STRING(8),
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fechaNacimiento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    cod_estado: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }});
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
