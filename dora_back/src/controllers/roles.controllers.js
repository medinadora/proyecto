const rolesService = require('../service/roles.service')

const list =async (req,res) => {
    
    const roles= await rolesService.list(req.query.q);
    res.send({
        success: true,
         roles
    });

;}

const listFilter =async (req,res) => {
    
    const roles= await rolesService.listFilter(req.params.q);
    res.send({
        success: true,
         roles
    });
;}

const getById = async (req, res) => {   
    const roles = await rolesService.getById(req.params.id);
    
    let jsonResultado =  req.query;
    jsonResultado['success'] = true;
    jsonResultado['roles'] = roles;
    res.status(201).send(jsonResultado);
}

const create = async  (req, res) => {   
    const roles = await rolesService.create(req.body);

    res.status(200).send({
        success: true,
        roles
    });
}

const update = async (req, res) => {   
    const roles = await rolesService.update(req.body, req.params.id);
    console.log ('roles actualizado', roles)
    res.status(202).send({
        success: true,
        roles,
    });
}

const remove = async (req, res) => {   
    const booleanValue = await rolesService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
        
    });
}

module.exports = {
list, listFilter, getById, create, update, remove
} 

