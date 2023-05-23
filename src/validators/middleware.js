const { Reserva } = require('../database/models/index')

const validarReservas = [
    async (req, res, next) => {
        try {
            const reservas = await Reserva.findAll();
            reservas.forEach(reserva => {
                if (reserva.fechaHora <= new Date()) {
                    reserva.update({ isPendiente: false })                   
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
        next();
    }
];

module.exports = { validarReservas }