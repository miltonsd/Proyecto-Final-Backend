const { Reserva, Usuario, Mesa } = require('../../database/models/index');

const getOneReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id, {
            attributes: { exclude: ['id_usuario', 'id_mesa'] },
            include: [{ model: Usuario, as: 'Usuario', required: true, attributes: { exclude: ['contraseña'] }}, { model: Mesa, as: 'Mesa', required: true }],
        });
        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada.' });
        } else {
            // Devuelvo la reserva
            return res.status(200).json(reserva);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            attributes: { exclude: ['id_usuario','id_mesa'] },
            include: [{ model: Usuario, as: 'Usuario', required: true, attributes: { exclude: ['contraseña'] }}, { model: Mesa, as: 'Mesa', required: true }],
        });
        if (reservas.length > 0) {
            reservas.sort((a, b) => a.id_reserva - b.id_reserva);
            return await res.status(200).json(reservas);
        } else {
            return res.status(404).json({ msg: 'Reservas no encontradas.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllReservasUsuario = async (req, res) => {
    try {
        const id  = req.params.id_usuario;
        const reservas = await Reserva.findAll({
            where: { id_usuario : id },
            attributes: { exclude: ['id_usuario', 'createdAt', 'updatedAt'] },
            paranoid: false
        });
        if (reservas.length > 0) {
            reservas.sort((a, b) => a.fechaHora - b.fechaHora);
            return await res.status(200).json(reservas);
        } else {
            return res.status(404).json({ msg: 'El usuario no posee reservas registradas.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { getAllReservas, getOneReserva, getAllReservasUsuario }