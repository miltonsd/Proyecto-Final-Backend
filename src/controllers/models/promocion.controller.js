const { Promocion, PromocionProductos } = require('../../database/models/index');

const deletePromocion = async (req, res) => {
    try {
        const id = req.params.id;
        const promocion = await Promocion.findByPk(id);
        if (!promocion) {
            return res.status(404).json({ msg: 'Promocion no encontrada.' })
        } else {
            // Encuentro la promocion y borro las relaciones con los productos que lo tienen
            PromocionProductos.destroy({ where: { id_promocion: id } });
            // Borro la promocion
            promocion.destroy();
            return res.status(200).json({ msg: 'Borrada correctamente.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { deletePromocion }