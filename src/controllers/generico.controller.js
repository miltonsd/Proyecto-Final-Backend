const opcionesValidas = ["Reserva", "Categoria", "Promocion", "Mesa"];

exports.createOne = Model =>
    async (req, res, next) => {
        try {
            const elemento = await Model.create(req.body);
            if (elemento) {
                if (opcionesValidas.includes(Model.name)) {
                    return res.status(200).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} creada correctamente.` })
                } else {
                    return res.status(200).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} creado correctamente.` })              
                }
            } else {
                return res.status(404).json({ msg: 'No se recibieron los datos.' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }

exports.getOne = Model =>
    async (req, res, next) => {
        try {
            const id = req.params.id
            // let elemento = await Model.findOne({ where: { id: id } });
            const elemento = await Model.findByPk(id);
            if (elemento) {
                return res.status(200).json(elemento)
            } else {
                return res.status(404).json({ msg: 'No hay datos.' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }

exports.getAll = Model =>
    async (req, res, next) => {
        try {
            const elementos = await Model.findAll()
            if (elementos.length > 0) {
                elementos.sort((a, b) => a.id - b.id);
                return res.status(200).json(elementos)
            } else {
                return res.status(404).json({ msg: 'No hay datos.' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }

exports.updateOne = Model =>
    async (req, res, next) => {
        try {
            const params = req.body;
            const id = req.params.id;
            const elemento = await Model.findByPk(id);
            if (elemento) {
                elemento.update(params)
                    .then(elemento => {
                        if (opcionesValidas.includes(Model.name)) {
                            return res.status(201).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} editada correctamente.`  })
                        } else {
                            return res.status(201).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} editado correctamente.`  })              
                        }})
            } else {
                return res.status(404).json({ msg: 'Elemento no encontrado.' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }

exports.deleteOne = Model => 
    async (req, res, next) => {
        try {
            const id = req.params.id;
            const elemento = await Model.findByPk(id);
            if (!elemento) {
                return res.status(404).json({ msg: 'Elemento no encontrado.' })
            } else {
                elemento.destroy()
                    .then(elemento => { 
                        if (opcionesValidas.includes(Model.name)) {
                            return res.status(200).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} eliminada correctamente.` })
                        } else {
                            return res.status(200).json({ elemento, msg: `${Model.name.replace(/([a-z])([A-Z])/g, "$1 $2")} eliminado correctamente.` })              
                        }})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }