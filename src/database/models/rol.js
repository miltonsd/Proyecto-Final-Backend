'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Rol:
 *       type: object
 *       properties:
 *         id_rol:
 *           type: integer
 *           readOnly: true
 *         descripcion:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

module.exports = (sequelize, DataTypes) => {
    class Rol extends Model {
        static associate(models) {
            Rol.hasMany(models.Usuario, { foreignKey: 'id_rol', onDelete: 'NO ACTION' });
        }
    }
    Rol.init({
        id_rol: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Rol',
        tableName: 'roles'
    });
    return Rol;
};