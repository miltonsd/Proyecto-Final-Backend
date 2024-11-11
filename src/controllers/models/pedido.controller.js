const { Op } = require("sequelize");
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
      estado: req.body.estado,
      montoImporte: req.body.montoImporte,
      id_usuario: req.body.id_usuario,
      id_mesa: req.body.id_mesa,
      observacion: req.body.observacion || 'No hay.',
    });

    if (pedido) {
      req.body.lista_productos.forEach((prod) => {
        PedidoProductos.create({
          id_pedido: pedido.id_pedido,
          id_producto: prod.id_producto,
          cantidad_prod: prod.cant_selecc,
          precio_unitario: prod.precio,
        });
      });

      return res.status(200).json({ msg: "Pedido creado correctamente.", pedido });
    } else {
      return res.status(404).json({ msg: "No se recibieron los datos." });
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
        { model: Producto, paranoid: false },
      ],
      paranoid: false
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
        { model: Producto, paranoid: false },
      ], // Sequelize incluye la tabla intermedia (PedidosProductos) y de ahi relaciona con Producto
      paranoid: true // De esta manera, ignora los pedidos eliminados (con timestamp en deletedAt)
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

const getPendientes = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      where: {
        estado: {
          [Op.or]: ['Pendiente', 'Listo']
        }
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
      return res.status(404).json({ msg: "No se encontraron pedidos pendientes." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getAllPedidosUsuario = async (req, res) => {
  try {
      const id  = req.params.id_usuario;
      const pedidos = await Pedido.findAll({
          where: { id_usuario : id },
          attributes: { exclude: ['id_usuario', 'updatedAt'] },
          include: { 
            model: Producto, attributes: ['id_producto', 'descripcion'], // ASÍ SE TRAEN LOS ATRIBUTOS QUE QUIERO (SIN USAR EL EXCLUDE)
            through: { attributes: ['cantidad_prod', 'precio_unitario'] }, // ASÍ SE TRAEN LOS ATRIBUTOS QUE QUIERO DE LA TABLA INTERMEDIA
          },
      });
      if (pedidos.length > 0) {
          pedidos.sort((a, b) => a.fechaHora - b.fechaHora);
          return await res.status(200).json(pedidos);
      } else {
          return res.status(404).json({ msg: 'El usuario no posee pedidos registrados.' })
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor.' });
  }
}

const updatePedido = async (req,res) => {
  try {
      // Obtiene el pedido
      const id_pedido = req.params.id;
      let p = await Pedido.findByPk(id_pedido)
      if (p) {
          // Hago el update
          p.update({
              id_usuario: req.body.id_usuario || p.id_usuario,
              id_mesa: req.body.id_mesa || p.id_mesa,
              estado: req.body.estado || p.estado,
              montoImporte: req.body.montoImporte || p.montoImporte,
              observacion: req.body.observacion || p.observacion
          }).then(async p => {
              const listaOriginal = []
              // Obtengo los productos asociados al pedido
              const productosPedido = await p.getProductos({ joinTableAttributes: ['id_producto', 'cantidad_prod', 'precio_unitario'] })
              productosPedido.forEach((prod) => {
                const producto = {
                  id_producto: prod.dataValues.id_producto,
                  precio_unitario: prod.dataValues.PedidoProductos.dataValues.precio_unitario,
                  cantidad_prod: prod.dataValues.PedidoProductos.dataValues.cantidad_prod,
                }
                // Guardo los id_producto de la lista original asociados al pedido
                listaOriginal.push(producto)
              })
              console.log('Productos del pedido Original:', listaOriginal)
              // Defino la lista con los productos que envía el frontend desde la petición HTTP
              const listaNuevos = req.body.lista_productos.map((p) => ({
                id_producto: p.id_producto,
                precio_unitario: p.precio,
                cantidad_prod: p.cant_selecc
              }))

              console.log('Productos desde el front:', listaNuevos)

              // Filtra desde los productos de la lista nueva aquellos que no están incluidos en la lista original, para agregarlos luego
              const productosAgregar = listaNuevos.filter(
                  (producto) => !listaOriginal.includes(producto) 
              )
              console.log('Productos a agregar:', productosAgregar)
              
              // Filtra desde los productos de la lista original aquellos que no están incluidos en la lista nueva, para eliminarlos luego
              const productosEliminar = listaOriginal.filter(
                (producto) => !listaNuevos.includes(producto)
              )
              console.log('Productos a eliminar:', productosEliminar)

              // Elimina los productos asociados que ya no corresponden en la tabla intermedia
              await Promise.all(productosEliminar.map((producto) =>
                PedidoProductos.destroy({ 
                  where: { id_pedido: p.id_pedido, id_producto: producto.id_producto }, 
                  force: true // Hace un eliminado físico del registro en la tabla PedidoProductos
                })
              ))

              // Agrega los nuevos productos asociados a la tabla intermedia
              await Promise.all(productosAgregar.map((producto) =>
                PedidoProductos.create({ 
                  id_pedido: p.id_pedido, 
                  id_producto: producto.id_producto, 
                  cantidad_prod: producto.cantidad_prod, 
                  precio_unitario: producto.precio_unitario 
                })
              ))

              res.status(201).json({p, 'msg' : 'Pedido editado correctamente.'})
          })
      } else {
          return res.status(404).json({msg : "Pedido no encontrado."})
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor.' });
  }
}

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
      return res.status(200).json({ msg: "Pedido eliminado correctamente." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const cambiarEstado = async (req, res) => {
  try {
    const id = req.params.id;
    let p = await Pedido.findByPk(id);
    if (p) {
      // Comprueba que el pedido tenga el estado "Pendiente" para pasarlo al estado "Listo"
      if (p.estado === 'Pendiente') {
        p.update({
          estado: 'Listo',
        }).then((p) => {
          res.status(201).json({ p, msg: "Pedido listo" });
        });
      } else {
        // Cambia del estado "Listo" al estado "Entregado"
        p.update({
          estado: 'Entregado',
        }).then((p) => {
          res.status(201).json({ p, msg: "Pedido entregado." });
        });
      }
    } else {
      return res.status(404).json({ msg: "Pedido no encontrado." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

module.exports = {
  getAllPedidos,
  getOnePedido,
  updatePedido,
  createPedido,
  deletePedido,
  getPendientes,
  cambiarEstado,
  getAllPedidosUsuario
};
