const { Mesa } = require("../../database/models/index");

const deleteMesa = async (req, res) => {
  try {
    const id = req.params.id;
    const mesa = await Mesa.findByPk(id);
    if (!mesa) {
      return res.status(404).json({ msg: "Mesa no encontrada." });
    } else {
      // Validar si la mesa no tiene pedidos "pendientes" ni "listos para entregar"
      const pedidosAsociados = await mesa.getPedidos()
      const pedidosSinEntregar = pedidosAsociados.filter(pedido => pedido.estado === "Pendiente" || pedido.estado === "Listo")
      
      if (pedidosSinEntregar.length > 0) {
        // La mesa tiene pedidos con estado "Pendiente" o "Listo"
        return res.status(404).json({ msg: "No se puede borrar la mesa porque tiene pedidos sin entregar." });
      } else {
        // La mesa tiene todos los pedidos entregados y asociados a los correspondientes resumenes

        // Encuentro las reservas que contengan a esa mesa y verifico si estan pendientes
        const reservasAsociadas = await mesa.getReservas()
        const reservasPendientes = reservasAsociadas.filter(reserva => reserva.isPendiente)
        
        if (reservasPendientes.length > 0) {
          // Borra lógicamente cada reserva pendiente
          await Promise.all(reservasPendientes.map(async (reserva) => {
            await reserva.destroy(); // Borrado lógico de la reserva pendiente
          }))
        }
      
        // Borro la mesa
        mesa.destroy();
        return res.status(200).json({ msg: "Mesa eliminada correctamente." });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const habilitarMesa = async (req, res) => {
  try {
    const id = req.params.id;
    let m = await Mesa.findByPk(id);
    if (m) {
      m.update({
        habilitada: true,
      }).then((c) => {
        res.status(201).json({ m, msg: "Mesa habilitada." });
      });
    } else {
      return res.status(404).json({ msg: "Mesa no encontrada." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const deshabilitarMesa = async (req, res) => {
  try {
    const id = req.params.id;
    let m = await Mesa.findByPk(id);
    if (m) {
      m.update({
        habilitada: false,
      }).then((c) => {
        res.status(201).json({ m, msg: "Mesa deshabilitada." });
      });
    } else {
      return res.status(404).json({ msg: "Mesa no encontrada." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

module.exports = { deleteMesa, habilitarMesa, deshabilitarMesa };
