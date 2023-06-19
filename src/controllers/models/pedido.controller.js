const {
  Pedido,
  Producto,
  Usuario,
  PedidoProductos,
} = require("../../database/models/index");

const createPedido = async (req, res) => {
  try {
    console.log(req.body);
    const pedido = await Pedido.create({
      fechaHora: req.body.fechaHora,
      isPendiente: req.body.isPendiente,
      montoImporte: req.body.montoImporte,
      id_usuario: req.body.id_usuario,
      id_mesa: req.body.id_mesa,
    });

    req.body.lista_productos.forEach((prod) => {
      PedidoProductos.create({
        id_pedido: pedido.id_pedido,
        id_producto: prod.id_producto,
        cantidad_prod: prod.cant_selecc,
        precio_unitario: prod.precio,
      });
    });

    if (pedido) {
      return res.status(200).json({ msg: "Creado correctamente.", pedido });
    } else {
      return res.status(404).json({ msg: "No se recibieron los datos." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      attributes: { exclude: ["id_usuario"] },
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: { exclude: ["contraseña"] },
        },
        { model: Producto },
      ], // Sequelize incluye la tabla intermedia (PedidosProductos) y de ahi relaciona con Producto
    });
    if (pedidos.length > 0) {
      pedidos.sort((a, b) => a.id_pedido - b.id_pedido);
      return await res.status(200).json(pedidos);
    } else {
      return res.status(404).json({ msg: "Pedidos no encontrados." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getOnePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id, {
      attributes: { exclude: ["id_usuario"] },
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: { exclude: ["contraseña"] },
        },
        { model: Producto },
      ],
    });
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado." });
    } else {
      // Devuelvo el pedido
      return res.status(200).json(pedido);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const deletePedido = async (req, res) => {
  try {
    const id = req.params.id;
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado." });
    } else {
      // Encuentro el pedido y borro las relaciones con los productos que lo tienen
      PedidoProductos.destroy({ where: { id_pedido: id } });
      // Borro el pedido
      pedido.destroy();
      return res.status(200).json({ msg: "Borrado correctamente." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};
const getPendientes = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      where: {
        isPendiente: true,
      },
      attributes: { exclude: ["id_usuario"] },
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: { exclude: ["contraseña"] },
        },
        { model: Producto },
      ],
    });
    if (pedidos.length > 0) {
      pedidos.sort((a, b) => a.id_pedido - b.id_pedido);
      return await res.status(200).json(pedidos);
    } else {
      return res.status(404).json({ msg: "Pedidos no encontrados." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const setEntregado = async (req, res) => {
  try {
    const id = req.params.id;
    let p = await Pedido.findByPk(id);
    if (p) {
      p.update({
        isPendiente: false,
      }).then((p) => {
        res.status(201).json({ p, msg: "Pedido entregado" });
      });
    } else {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

module.exports = {
  getAllPedidos,
  getOnePedido,
  createPedido,
  deletePedido,
  getPendientes,
  setEntregado,
};
