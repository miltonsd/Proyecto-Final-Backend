const mesa = require("../../database/models/mesa");
const { Mesa } = require("../../database/models/index");

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

module.exports = { habilitarMesa, deshabilitarMesa };
