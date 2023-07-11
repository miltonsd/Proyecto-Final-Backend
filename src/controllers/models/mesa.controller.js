const mesa = require("../../database/models/mesa");
const { Mesa } = require("../../database/models/index");

const getOneMesa = async (req, res) => {
  try {
    const { id } = req.params;
    const mesa = await Mesa.findByPk(id);
    if (!mesa) {
      return res.status(404).json({ msg: "Mesa no encontrada." });
    } else {
      // Devuelvo la mesa
      return res.status(200).json(mesa);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const getAllMesas = async (req, res) => {
  try {
    const mesas = await Mesa.findAll();
    if (!mesa) {
      return res.status(404).json({ msg: "Mesas no encontradas" });
    } else {
      mesas.sort((a, b) => a.id - b.id);
      return await res.status(200).json(mesas);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const updateMesa = async (req, res) => {
  try {
    const params = req.body;
    const id = req.params.id;
    let m = await Menu.findByPk(id);
    if (m) {
      // Hago el update
      m.update({
        ubicacion: params.ubicacion || m.ubicacion,
      }).then((c) => {
        res.status(201).json({ m, msg: "Editada correctamente" });
      });
    } else {
      return res.status(404).json({ msg: "Mesa no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const deleteMesa = async (req, res) => {
  try {
    const id = req.params.id;
    const mesa = await Categoria.findByPk(id);
    if (!mesa) {
      return res.status(404).json({ msg: "Mesa no encontrada" });
    } else {
      // Borro la mesa
      mesa.destroy();
      return res.status(200).json({ msg: "Borrada correctamente" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const createMesa = async (req, res) => {
  try {
    const m = await Mesa.create(req.body);
    if (m) {
      return res.status(200).json({ msg: "Creada correctamente", m });
    } else {
      return res.status(404).json({ msg: "No se recibieron los datos" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
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
        res.status(201).json({ m, msg: "Mesa habilitada" });
      });
    } else {
      return res.status(404).json({ msg: "Mesa no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
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
        res.status(201).json({ m, msg: "Mesa deshabilitada" });
      });
    } else {
      return res.status(404).json({ msg: "Mesa no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

module.exports = {
  getAllMesas,
  habilitarMesa,
  deshabilitarMesa,
  getOneMesa,
  deleteMesa,
  updateMesa,
  createMesa,
};
