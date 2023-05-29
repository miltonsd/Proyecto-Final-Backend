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
            validate: { 
                // contains: ['18:00'], 
                // contains: ['19:00'],
                // contains: ['20:00'],
                // contains: ['21:00'],
                // contains: ['22:00'],
                // contains: ['23:00'],
            }
            // validate: {
                // validarHora(valor) {
                    // hora = fechaHora.substring(11,15);
                    // hora = String(valor).substring(11,15);
                    // horasReservas = [['18:00', '19:00', '20:00', '21:00', '22:00', '23:00']]
                    // if(![['18', '19', '20', '21', '22', '23']].includes(String(valor).substring(16,18))) {
                    // if(this.notIn(String(valor).substring(11,15), [['18:00', '19:00', '20:00', '21:00', '22:00', '23:00']])) {
                    // if(value) {
                        // 2023-05-31T22:00:00.000Z
                        // Wed May 31 2023 19:00:00 GMT-0300 (hora estándar de Argentina)
                        // console.log(String(valor).substring(16,18));
                        // throw new Error('Hora invalida');
                    // }
                    
                // }
            // }
        },
        cant_personas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {min:1, max:6}
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
        paranoid: true,
        modelName: 'Reserva',
    });
    return Reserva;
};