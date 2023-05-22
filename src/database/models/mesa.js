'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Mesa extends Model {
        static associate(models) {
            Mesa.hasMany(models.Reserva, { foreignKey: 'id_mesa', onDelete: 'NO ACTION' });
        }
    }
    Mesa.init({
        id_mesa: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        capacidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {min:2, max:6}
        },
        ubicacion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Mesa',
    });
    return Mesa;
};