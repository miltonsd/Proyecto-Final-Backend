'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            Reserva.belongsTo(models.Usuario, { as: 'Usuario', foreignKey: 'id_usuario' });
            Reserva.belongsTo(models.Mesa, { as: 'Mesa', foreignKey: 'id_mesa' });
        } 
    }
    Reserva.init({ 
        id_reserva: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaHora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cant_personas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        isPendiente: {
            type: DataTypes.BOOLEAN, // si isPendiente = false, se llevo a cabo la reserva // En MySQL true = 1, false = 0
            allowNull: false,
            defaultValue: true, // Por defecto, una reserva se registra con el estado Pendiente
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_mesa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Reserva',
    });
    return Reserva;
};