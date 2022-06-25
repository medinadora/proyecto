const pruebaService = require('../service/prueba.service')

const list =async (req,res) => {
    
    const pruebas= await pruebaService.list(req.query.q);
    res.send({
        success: true,
         pruebas
    });

;}

const listFilter =async (req,res) => {
    
    const pruebas= await pruebaService.listFilter(req.params.q);
    res.send({
        success: true,
         pruebas
    });
;}

const getById = async (req, res) => {   
    const pruebas = await pruebaService.getById(req.params.id);
    
    let jsonResultado =  req.query;
    jsonResultado['success'] = true;
    jsonResultado['pruebas'] = pruebas;
    res.status(201).send(jsonResultado);
}

const create = async  (req, res) => {   
    const pruebas = await pruebaService.create(req.body);

    res.status(200).send({
        success: true,
        pruebas
    });
}

const update = async (req, res) => {   
    const pruebas = await pruebaService.update(req.body, req.params.id);
    console.log ('pruebas actualizado', pruebas)
    res.status(202).send({
        success: true,
        pruebas,
    });
}

const remove = async (req, res) => {   
    const booleanValue = await pruebaService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
        
    });
}

module.exports = {
list, listFilter, getById, create, update, remove
} 

