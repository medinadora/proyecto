const cargaService = require('../service/cargas.service')

const list =async (req,res) => {
    
    const cargas= await cargaService.list(req.query.q);
    res.send({
        success: true,
         cargas
    });

;}

const listFilter =async (req,res) => {
    
    const cargas= await cargaService.listFilter(req.params.q);
    res.send({
        success: true,
         cargas
    });
;}

const getById = async (req, res) => {   
    const cargas = await cargaService.getById(req.params.id);
    
    let jsonResultado =  req.query;
    jsonResultado['success'] = true;
    jsonResultado['cargas'] = cargas;
    res.status(201).send(jsonResultado);
}

const create = async  (req, res) => {   
    const cargas = await cargaService.create(req.body);

    res.status(200).send({
        success: true,
        cargas
    });
}

const update = async (req, res) => {   
    const cargas = await cargaService.update(req.body, req.params.id);
    console.log ('cargas actualizado', cargas)
    res.status(202).send({
        success: true,
        cargas,
    });
}

const remove = async (req, res) => {   
    const booleanValue = await cargaService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
        
    });
}

module.exports = {
list, listFilter, getById, create, update, remove
} 

