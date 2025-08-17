'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      { id_reserva: 1, fechaHora: "2025-07-16T19:00:00", cant_personas: 4, isPendiente: false, id_usuario: 3, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 2, fechaHora: "2025-07-09T21:00:00", cant_personas: 6, isPendiente: false, id_usuario: 3, id_mesa: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 3, fechaHora: "2025-06-24T18:00:00", cant_personas: 6, isPendiente: false, id_usuario: 3, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 4, fechaHora: "2025-08-23T22:00:00", cant_personas: 2, isPendiente: true, id_usuario: 3, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 5, fechaHora: "2025-08-24T22:00:00", cant_personas: 6, isPendiente: true, id_usuario: 3, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 6, fechaHora: "2025-09-13T23:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 7, fechaHora: "2025-08-23T21:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 8, fechaHora: "2025-08-27T20:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 9, fechaHora: "2025-09-04T18:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 10, fechaHora: "2025-09-01T21:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 11, fechaHora: "2025-08-19T23:00:00", cant_personas: 2, isPendiente: true, id_usuario: 3, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 12, fechaHora: "2025-09-09T19:00:00", cant_personas: 4, isPendiente: true, id_usuario: 3, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, {});
  }
};