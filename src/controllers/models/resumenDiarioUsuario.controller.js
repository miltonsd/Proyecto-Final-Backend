const { Op } = require("sequelize");
const {
  ResumenDiarioUsuario,
  Pedido,
  Usuario,
  Producto
} = require("../../database/models/index");

const createResumen = async (req, res) => {
  try {
    console.log(req.body);
    const resumen = await ResumenDiarioUsuario.create({
      fechaHora: req.body.fechaHora,    
      montoTotal: req.body.montoTotal,
      id_usuario: req.body.id_usuario,
    })

    if (resumen) {
      console.log(resumen)
      // Definir el inicio y fin del día
      const inicioDia = new Date(resumen.fechaHora);
      inicioDia.setUTCHours(0, 0, 0, 0);

      const finDia = new Date(resumen.fechaHora);
      finDia.setUTCHours(23, 59, 59, 999);

        req.body.lista_pedidos.forEach((pedido) => {
          console.log(pedido)
            Pedido.update(
                { id_resumenDiario: resumen.id_resumenDiario, },
                {
                    where: {
                      id_usuario: pedido.id_usuario,
                      id_resumenDiario: null,  // Solo pedidos sin resumen
                      fechaHora: { [Op.gte]: inicioDia, [Op.lt]: finDia } // Fecha de hoy
                    },
                }
            );
        });
      return res.status(200).json({ msg: "Resumen creado correctamente.", resumen });
    } else {
      return res.status(404).json({ msg: "No se recibieron los datos." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getOneResumen = async (req, res) => {
  try {
    const { id } = req.params;
    const resumen = await ResumenDiarioUsuario.findByPk(id, {
      attributes: { exclude: ["id_usuario"] },
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: { exclude: ["contraseña"] },
        },
        { model: Pedido, as: "pedidos", paranoid: false },
      ],
      paranoid: false
    });
    if (!resumen) {
      return res.status(404).json({ msg: "Resumen no encontrado." });
    } else {
      // Devuelvo el resumen
      return res.status(200).json(resumen);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getAllResumenes = async (req, res) => {
  try {
    const resumenes = await ResumenDiarioUsuario.findAll({
      attributes: { exclude: ["id_usuario"] },
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: { exclude: ["contraseña"] },
        },
        { model: Pedido, as: "pedidos", paranoid: false },
      ],
      paranoid: true // De esta manera, ignora los resumenes eliminados (con timestamp en deletedAt)
    });
    if (resumenes.length > 0) {
      resumenes.sort((a, b) => a.id_resumenDiario - b.id_resumenDiario);
      return await res.status(200).json(resumenes);
    } else {
      return res.status(404).json({ msg: "Resumenes no encontrados." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const getAllResumenesUsuario = async (req, res) => {
  try {
      const id  = req.params.id_usuario;
      const resumenes = await ResumenDiarioUsuario.findAll({
          where: { id_usuario : id },
          attributes: { exclude: ['id_usuario', 'updatedAt'] },
          include: { 
            model: Pedido, as: "Pedido", paranoid: false, 
              include: [{ 
                model: Producto, attributes: ['id_producto', 'descripcion'], // ASÍ SE TRAEN LOS ATRIBUTOS QUE QUIERO (SIN USAR EL EXCLUDE)
                through: { attributes: ['cantidad_prod', 'precio_unitario'] }, // ASÍ SE TRAEN LOS ATRIBUTOS QUE QUIERO DE LA TABLA INTERMEDIA
              }]
          },
      });
      if (resumenes.length > 0) {
        resumenes.sort((a, b) => a.fechaHora - b.fechaHora);
          return await res.status(200).json(resumenes);
      } else {
          return res.status(404).json({ msg: 'El usuario no posee resumenes registrados.' })
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor.' });
  }
}

const updateResumen = async (req,res) => {
  try {
      // Obtiene el resumen
      const id_resumenDiario = req.params.id;
      let r = await ResumenDiarioUsuario.findByPk(id_resumenDiario)
      if (r) {
          // Hago el update
          r.update({
                fechaHora: req.body.fechaHora || r.fechaHora,
                montoTotal: req.body.montoTotal || r.montoTotal,
                id_usuario: req.body.id_usuario || r.id_usuario,
          }).then(async r => {
              res.status(201).json({r, 'msg' : 'Resumen editado correctamente.'})
          })
      } else {
          return res.status(404).json({msg : "Resumen no encontrado."})
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor.' });
  }
}

const deleteResumen = async (req, res) => {
  try {
    const id_resumenDiario = req.params.id;
    const resumen = await ResumenDiarioUsuario.findByPk(id_resumenDiario);
    if (!resumen) {
      return res.status(404).json({ msg: "Resumen no encontrado." });
    } else {
      // Borro el resumen
      resumen.destroy();
      return res.status(200).json({ msg: "Resumen eliminado correctamente." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

module.exports = { createResumen, getOneResumen, getAllResumenes, getAllResumenesUsuario, updateResumen, deleteResumen };
