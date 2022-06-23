const vehiculoService = require('../service/vehiculos.service')

const list =async (req,res) => {
    
    const vehiculos = await vehiculoService.list(req.query.q);
    res.send({
        success: true,
        vehiculos
    });

;}
const listFilter =async (req,res) => {
    
    const vehiculos= await vehiculoService.listFilter(req.params.q);
    res.send({
        success: true,
        vehiculos
    });

;}

const getById = async (req, res) => {   
    const vehiculos = await vehiculoService.getById(req.params.id);
    
    const jsonResultado =  req.query;
    jsonResultado['success'] = true;
    jsonResultado['vehiculos'] = vehiculos;
    res.status(201).send(jsonResultado);
}


const create = async  (req, res) => {   
    const vehiculos = await vehiculoService.create(req.body);

    res.status(200).send({
        success: true,
        vehiculos
    });
}


const update = async (req, res) => {   
    const vehiculos = await vehiculoService.update(req.body, req.params.id);
    console.log('datos actualizacion',vehiculos);
    res.status(202).send({
        success: true,
        vehiculos,
    });
;}

const remove = async (req, res) => {   
    const booleanValue = await vehiculoService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
        
    });
}

module.exports = {
list, listFilter, getById, create, update, remove
} 

