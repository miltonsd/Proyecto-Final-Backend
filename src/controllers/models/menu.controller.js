const menu = require('../../database/models/menu');
const { Menu } = require('../../database/models/index');

const getOneMenu = async (req,res) => {
    try {
        const { id } = req.params; 
        const menu = await Menu.findOne({
            where: { id },
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
        const menues = await Menu.findAll();
        if (!menues) {
            return res.status(404).json({ msg: 'Menues no encontrados' });
        } else {
            menues.sort((a, b) => a.id - b.id);
            return await res.status(200).json(menues);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

/* const updateMenu = async (req,res) => {
    try{
        const params = req.body;
        const id = req.params.id;
        let m = await Menu.findByPk(id);
        if (m) {  
            // Hago el update
            m.update({
                descripcion: params.descripcion || u.descripcion,
            }).then(c => {
            res.status(201).json({c, 'msg':'Editada correctamente'})
            })
        } else {
            return res.status(404).json({msg:"Categoria no encontrada"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
} */

const deleteOneMenu = async (req,res) => {
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

const createMenu = async (req,res) => {
    try{
        const m = await Menu.create(req.body);
        if (m) {
            return res.status(200).json({'msg':'Creado correctamente', m})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {getAllMenues,getOneMenu,deleteOneMenu, /*updateMenu*/ createMenu}