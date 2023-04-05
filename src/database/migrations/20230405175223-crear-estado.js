'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('estados', {cod_estado: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    descripcion: {
      type: Sequelize.STRING(50),
      allowNull: false,
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
     await queryInterface.dropTable('estados');
  }
};
