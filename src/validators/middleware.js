const { Reserva } = require('../database/models/index')
const jwt = require('jwt-simple')

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
            console.error(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
        next();
    }
];

const authMiddleware = async(req, res, next) => {
  // Intenta obtener el token del encabezado 'Authorization' de la request
  let token = req.headers['authorization']

  // En caso de no encontrarlo en el encabezado, lo buscara en los parámetros de la URL
  if (!token) { 
    token = req.params.token 
  }

  // Si no encontró el token, devuelve error 401
  if (!token) return res.status(401).json({ msg: 'Token requerido' });
  
  // Si lo encontró, intentará decodificarlo y continuar
  try {
      const decoded = jwt.decode(token, process.env.HASH_KEY);
      req.user = decoded;
      next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token inválido' });
    }
}

const rolesMiddleware = (roles = []) => (req, res, next) => {
  // 1: Administrador, 2: Cliente, 3: Mozo, 4: Cocinero
    const token = req.headers['authorization']
    const decoded = jwt.decode(token, process.env.HASH_KEY)
    const id_rol = decoded.id_rol
    if (roles.includes(id_rol)) {
      next();
    } else {
      return res.status(403).json({ msg: 'Acceso denegado' })
    }
}

module.exports = { validarReservas, authMiddleware, rolesMiddleware };