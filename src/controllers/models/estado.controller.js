const estado = require('../../database/models/estado');
const { Estado } = require('../../database/models/index');

const getOneEstado = async (req,res) => {
    try {
        const { cod_estado } = req.params; 
        const estado = await Estado.findOne({
            where: { cod_estado },
        });
        if (!estado) {
            return res.status(404).json({ msg: 'Estado no encontrado.'});
        } else {
            // Devuelvo el estado
            return res.status(200).json(estado);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAllEstados = async (req,res) => {
    try {
        const estados = await Estado.findAll();
        if (!estados) {
            return res.status(404).json({ msg: 'Estados no encontrados' });
        } else {
            estados.sort((a, b) => a.cod_estado - b.cod_estado);
            return await res.status(200).json(estados);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {getAllEstados,getOneEstado}