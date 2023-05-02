const menu = require('../../database/models/menu');
const { Menu, Usuario} = require('../../database/models/index');

const getOneMenu = async (req,res) => {
    try {
        const { id } = req.params; 
        const menu = await Menu.findByPk(id, {
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario' }]
          });
        if (!menu) {
            return res.status(404).json({ msg: 'Menu no encontrado.'});
        } else {
            // Devuelvo el menu
            return res.status(200).json(menu);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAllMenues = async (req,res) => {
    try {
        const menues = await Menu.findAll({
            attributes: { exclude: ['id_usuario'] },
            include: [{ model: Usuario, as: 'Usuario' }]
          });
        if (menues.length > 0) {
            menues.sort((a, b) => a.id_menu - b.id_menu);
            return await res.status(200).json(menues);
        } else {
            return res.status(404).json({ msg: 'Menues no encontrados.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const deleteMenu = async (req,res) => {
    try{
        const id = req.params.id;
        const menu = await Menu.findByPk(id);
        if (!menu) {
            return res.status(404).json({msg:"Menu no encontrado"})
        } else {
            // Borro el menu
            menu.destroy();
            return res.status(200).json({msg:"Menu correctamente"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {getAllMenues,getOneMenu,deleteMenu}