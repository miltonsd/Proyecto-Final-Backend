const categoria = require('../../database/models/categoria');
const { Categoria } = require('../../database/models/index');

const getOneCategoria = async (req,res) => {
    try {
        const { cod_categoria } = req.params; // const { id } = req.params   =    const id = req.params.cod_categoria;
        const categoria = await Categoria.findOne({
            where: { cod_categoria },
        });
        if (!categoria) {
            return res.status(404).json({ msg: 'Categoria no encontrada.'});
        } else {
            // Devuelvo la categoria
            return res.status(200).json(categoria);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAllCategorias = async (req,res) => {
    try {
        const categorias = await Categoria.findAll();
        if (!categorias) {
            return res.status(404).json({ msg: 'Categorias no encontradas' });
        } else {
            categorias.sort((a, b) => a.cod_categoria - b.cod_categoria);
            return await res.status(200).json(categorias);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const updateCategoria = async (req,res) => {
    try{
        const params = req.body;
        const cod_categoria = req.params.cod_categoria;
        let c = await Categoria.findByPk(cod_categoria);
        if (c) {  
            // Hago el update
            c.update({
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
}

const deleteOneCategoria = async (req,res) => {
    try{
        const cod_categoria = req.params.cod_categoria;
        const categoria = await Categoria.findByPk(cod_categoria);
        if (!categoria) {
            return res.status(404).json({msg:"Categoria no encontrada"})
        } else {
            // Borro la categoria
            categoria.destroy();
            return res.status(200).json({msg:"Borrada correctamente"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const createCategoria = async (req,res) => {
    try{
        const c = await Categoria.create(req.body);
        if (c) {
            return res.status(200).json({'msg':'Creada correctamente', c})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {getAllCategorias,getOneCategoria,deleteOneCategoria,updateCategoria,createCategoria}