'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        static associate(models) {
            Usuario.belongsTo(models.Rol, { foreignKey: 'id_rol' });
            Usuario.belongsTo(models.Categoria, { as: 'Categoria', foreignKey: 'id_categoria' });
            Usuario.hasMany(models.Menu, { foreignKey: 'id_usuario', onDelete: 'NO ACTION' });
            Usuario.hasMany(models.Pedido, { foreignKey: 'id_usuario', onDelete: 'NO ACTION' });
            Usuario.hasMany(models.Reserva, { foreignKey: 'id_usuario', onDelete: 'NO ACTION' });
        }
    }
    Usuario.init({
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
                len: {
                    args: [3, 50],
                    msg: 'El nombre debe contener entre 3 a 50 letras.',
                },
            },
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
                len: {
                    args: [3, 50],
                    msg: 'El apellido debe contener entre 3 a 50 letras.',
                },
            },
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: 'Email requerido.' },
                isEmail: { msg: 'Formato de email invalido.' },
                len: {
                    args: [5, 100],
                    msg: 'El correo puede contener hasta 100 caracteres maximo.',
                },
            },
        },
        contraseña: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                len: {
                    args: [6, 150],
                    msg: 'La contraseña debe contener entre 6 y 150 caracteres.'
                }
            }
        },
        isConfirmado: {
            type: DataTypes.BOOLEAN, // si isConfirmado = false, aun no confirmo/valido su mail // En MySQL true = 1, false = 0
            allowNull: false,
            defaultValue: false, // Por defecto, un usuario se registra con un estado NO confirmado
        },
        documento: {
            type: DataTypes.STRING(8),
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: { msg: 'El documento solo debe contener numeros.' },
                len: {
                    args: [7, 8],
                    msg: 'El documento debe contener entre 7 y 8 numeros.',
                },
            },
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 500],
                    msg: 'La dirección debe contener mínimo 3 caracteres.',
                },
            }
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: { msg: 'El telefono solo debe contener numeros.' },
            },
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                validarFechaNac(valor) {
                    const fechaNac = new Date(valor)
                    const fechaLimite = new Date(
                    new Date().getFullYear() - 15,
                    new Date().getMonth(),
                    new Date().getDate(), 0
                    )
                    if (fechaNac > fechaLimite) {
                        throw new Error("Edad mínima requerida 15 años.");
                    }
                },
            },
        },
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2, // Lo crea como cliente (1:AS|2:Cliente|3:Mozo)
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // El nivel de categoría mínima es 1 (1: Básico|2:GOLD|3:PLATINUM|4:BLACK)
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Usuario',
    });
    return Usuario;
};