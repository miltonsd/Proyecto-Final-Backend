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
  const token = req.headers['authorization']
  if (!token) return res.status(401).json({ msg: 'Token requerido' });
  
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