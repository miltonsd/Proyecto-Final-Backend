'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Estado, { foreignKey: 'cod_estado' });
      Usuario.belongsTo(models.Rol, { foreignKey: 'id_rol' });
      Usuario.belongsTo(models.Categoria, { foreignKey: 'cod_categoria' });
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
        isAlpha: { msg: 'El nombre solo debe contener letras' },
        len: {
          args: [3, 50],
          msg: 'El nombre debe contener entre 3 a 50 letras',
        },
      },
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: { msg: 'El apellido solo debe contener letras' },
        len: {
          args: [3, 50],
          msg: 'El apellido debe contener entre 3 a 50 letras',
        },
      },
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email requerido' },
        isEmail: { msg: 'Formato de email invalido' },
        len: {
          args: [5, 100],
          msg: 'El correo puede contener hasta 100 caracteres maximo',
        },
      },
    },
    contraseña: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: { msg: 'El apellido solo debe contener numeros' },
        len: {
          args: [7, 8],
          msg: 'El documento debe contener entre 7 y 8 numeros',
        },
      },
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'El telefono solo debe contener numeros' },
      },
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cod_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2, // Lo crea como cliente (1:AS|2:Cliente|3:Mozo)
    },
    cod_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // El nivel de categoría mínima es 1 (1: Básico|2:GOLD|3:PLATINUM|4:BLACK)
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};