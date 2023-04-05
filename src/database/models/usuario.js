'use strict'; 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
     static associate(models) {
      Usuario.belongsTo(models.Estado, {foreignKey: 'cod_estado'});
      Usuario.belongsTo(models.Rol, {foreignKey: 'id_rol'});
    } 
  }
  Usuario.init({ 
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: { msg:"El nombre solo debe contener letras" },
        len: {
          args: [3,50],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      }
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: { msg:"El apellido solo debe contener letras" },
        len: {
          args: [3,50],
          msg: "El apellido debe contener entre 3 a 50 letras"
        }
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {msg:"Email requerido"},
        isEmail: {msg:"Formato de email invalido"},
        len: {
          args: [5,100],
          msg: "El correo puede contener hasta 100 caracteres maximo"
        }
      }
    },
    contraseña: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2 // Lo crea como usuario (1:AS|2:Usuario|3:Mozo)
    },
    documento: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: { msg:"El apellido solo debe contener numeros" },
            len: {
              args: [7,8],
              msg: "El documento debe contener entre 7 y 8 numeros"
            }
          }
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: { msg:"El telefono solo debe contener numeros" },
            }
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cod_estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  }, {    
    sequelize,
    modelName: 'Usuario', 
  });
  return Usuario;
};