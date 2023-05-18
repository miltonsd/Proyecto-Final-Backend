'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      { id_reserva: 1, fechaHora: "2021-05-08T14:02:10", cant_personas: 10, isPendiente: true, id_usuario: 3, id_mesa: 10, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 2, fechaHora: "2021-03-11T00:37:19", cant_personas: 4, isPendiente: true, id_usuario: 1, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 3, fechaHora: "2022-12-06T01:51:57", cant_personas: 16, isPendiente: true, id_usuario: 1, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 4, fechaHora: "2021-10-27T21:18:48", cant_personas: 8, isPendiente: true, id_usuario: 1, id_mesa: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 5, fechaHora: "2022-09-09T01:26:30", cant_personas: 6, isPendiente: true, id_usuario: 2, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 6, fechaHora: "2021-07-15T15:26:20", cant_personas: 6, isPendiente: true, id_usuario: 1, id_mesa: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 7, fechaHora: "2022-08-23T09:53:57", cant_personas: 2, isPendiente: true, id_usuario: 1, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 8, fechaHora: "2023-05-05T02:28:06", cant_personas: 6, isPendiente: true, id_usuario: 2, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 9, fechaHora: "2021-07-27T09:33:36", cant_personas: 14, isPendiente: true, id_usuario: 2, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 10, fechaHora: "2022-09-20T10:31:18", cant_personas: 4, isPendiente: true, id_usuario: 2, id_mesa: 10, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 11, fechaHora: "2022-10-01T18:42:19", cant_personas: 16, isPendiente: true, id_usuario: 2, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 12, fechaHora: "2021-06-02T13:27:58", cant_personas: 12, isPendiente: true, id_usuario: 3, id_mesa: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 13, fechaHora: "2023-02-03T22:02:57", cant_personas: 12, isPendiente: true, id_usuario: 3, id_mesa: 5, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 14, fechaHora: "2021-04-11T03:45:36", cant_personas: 10, isPendiente: true, id_usuario: 2, id_mesa: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 15, fechaHora: "2022-03-09T04:42:40", cant_personas: 16, isPendiente: true, id_usuario: 2, id_mesa: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 16, fechaHora: "2022-04-05T13:08:32", cant_personas: 14, isPendiente: true, id_usuario: 2, id_mesa: 8, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 17, fechaHora: "2021-06-23T11:40:36", cant_personas: 4, isPendiente: true, id_usuario: 2, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 18, fechaHora: "2021-10-01T06:30:58", cant_personas: 4, isPendiente: true, id_usuario: 1, id_mesa: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 19, fechaHora: "2021-09-04T01:58:11", cant_personas: 4, isPendiente: true, id_usuario: 1, id_mesa: 2, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 20, fechaHora: "2022-02-01T09:13:30", cant_personas: 4, isPendiente: true, id_usuario: 2, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 21, fechaHora: "2022-05-19T09:34:13", cant_personas: 2, isPendiente: true, id_usuario: 2, id_mesa: 3, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 22, fechaHora: "2021-02-05T08:13:32", cant_personas: 12, isPendiente: true, id_usuario: 2, id_mesa: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 23, fechaHora: "2021-09-20T22:07:33", cant_personas: 16, isPendiente: true, id_usuario: 2, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 24, fechaHora: "2023-04-30T01:48:22", cant_personas: 16, isPendiente: true, id_usuario: 3, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 25, fechaHora: "2021-08-09T15:27:11", cant_personas: 4, isPendiente: true, id_usuario: 2, id_mesa: 1, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 26, fechaHora: "2021-11-27T18:40:23", cant_personas: 16, isPendiente: true, id_usuario: 1, id_mesa: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 27, fechaHora: "2021-05-04T04:33:52", cant_personas: 8, isPendiente: true, id_usuario: 1, id_mesa: 7, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 28, fechaHora: "2021-07-24T09:17:07", cant_personas: 10, isPendiente: true, id_usuario: 3, id_mesa: 4, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 29, fechaHora: "2022-10-29T09:29:12", cant_personas: 14, isPendiente: true, id_usuario: 1, id_mesa: 9, createdAt: new Date(), updatedAt: new Date() },
      { id_reserva: 30, fechaHora: "2021-10-08T17:06:59", cant_personas: 16, isPendiente: true, id_usuario: 2, id_mesa: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, {});
  }
};