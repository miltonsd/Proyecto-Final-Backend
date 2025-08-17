const rol = require('../../database/models/rol');
const { Rol } = require('../../database/models/index');

const deleteRol = async (req,res) => {
    try {
        const id_rol = req.params.id;
        const rol = await Rol.findByPk(id_rol);
        if (!rol) {
            return res.status(404).json({ msg: "Rol no encontrado." })
        }

        const rolesSistema = [1,2,3,4] // 1: Admin, 2: Cliente, 3: Mozo, 4: Cocinero
        if (rolesSistema.includes(rol.id_rol)) {
            return res.status(403).json({ msg: "No se puede eliminar un rol esencial del sistema." })
        }

        // Borro el rol que no es esencial para el sistema
        await rol.destroy();
        return res.status(200).json( {msg: "Rol eliminado correctamente." })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor.' });
    }
}

module.exports = { deleteRol }