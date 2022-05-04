const usuarioService = require('../service/usuarios.service')

const list =async (req,res) => {
    
    const usuarios = await usuarioService.list(req.query.q);
    res.send({
        success: true,
        usuarios,
    });

;}
const listFilter =async (req,res) => {
    
    const usuarios = await usuarioService.listFilter(req.query.q);
    res.send({
        success: true,
        usuarios,
    });

;}

const getById = async (req, res) => {   
    const usuarios = await usuarioService.getById(req.params.id);
    
    const jsonResultado =  req.query;
    jsonResultado["success"] = true;
    jsonResultado["usuarios"] = usuarios;


    res.status(200).send(jsonResultado);
}


const create = async  (req, res) => {   
    const usuarios = await usuarioService.create(req.body);

    res.status(200).send({
        success: true,
        usuarios
    });
}

const update = async (req, res) => {   
    const usuarios = await usuarioService.update(req.body, req.params.id);
    console.log('datos actualizacion',usuarios);
    res.status(202).send({
        success: true,
        usuarios,
    });
}


const remove = async (req, res) => {   
    const booleanValue = await usuarioService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
        
    });
}


module.exports = {
list, listFilter, getById, create, update, remove
} 

