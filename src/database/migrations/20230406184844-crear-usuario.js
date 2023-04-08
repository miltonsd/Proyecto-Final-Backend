'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      contraseña: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      documento: {
        type: Sequelize.STRING(8),
        allowNull: false,
        unique: true,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      cod_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Estados',
          key: 'cod_estado',
        },
        onUpdate: 'CASCADE',
      },
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
        references: {
          model: 'Roles',
          key: 'id_rol',
        },
        onUpdate: 'CASCADE',
      },
      cod_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: 'Categorias',
          key: 'cod_categoria',
        },
        onUpdate: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  },
};