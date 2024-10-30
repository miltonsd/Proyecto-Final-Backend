const rol = require('../../database/models/rol');
const { Rol } = require('../../database/models/index');

const createRol = async (req,res) => {
    try{
        const r = await Rol.create(req.body);
        if (r) {
            return res.status(200).json({'msg':'Rol creado correctamente.', r})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos.'})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getOneRol = async (req,res) => {
    try {
        console.log(req.params);
        const {id_rol} = req.params;    
        // const rol = await Rol.findOne({
        //     // where: {id_rol}, // Es = a where: {id_rol: id_rol}
        // });
        const rol = await Rol.findByPk(id_rol);
        if (!rol) {
            return res.status(404).json({ msg: 'Rol no encontrado.'});
        } else {
            // Devuelvo el rol
            return res.status(200).json(rol);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const getAllRoles = async (req,res) => {
    try {
        const roles = await Rol.findAll();
        if (!rol) {
            return res.status(404).json({ msg: 'Roles no encontrados.' });
        } else {
            roles.sort((a, b) => a.id_rol - b.id_rol);
            return await res.status(200).json(roles);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const updateRol = async (req,res) => {
    try{
        const params = req.body;
        const id_rol = req.params.id_rol;
        let r = await Rol.findByPk(id_rol);
        if (r) {  
            // Hago el update
            r.update({
                descripcion: params.descripcion || r.descripcion,
            }).then(r => {
            res.status(201).json({r, 'msg':'Rol editado correctamente.'})
            })
        } else {
            return res.status(404).json({msg:"Rol no encontrado."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

const deleteRol = async (req,res) => {
    try{
        const id_rol = req.params.id_rol;
        const rol = await Rol.findByPk(id_rol);
        if (!rol) {
            return res.status(404).json({msg:"Rol no encontrado."})
        } else {
            // Borro el rol
            rol.destroy();
            return res.status(200).json({msg:"Rol eliminado correctamente."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = {getAllRoles,getOneRol,deleteRol,updateRol,createRol}