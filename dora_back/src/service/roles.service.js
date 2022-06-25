const { sequelize} = require("../service/bd.service");
const { RolesModel }= require('../models/roles.model');
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const rolesModelResult = await RolesModel.findAll ();
 
 const rolesArray = new Array();
 for (let i = 0; i <rolesModelResult.length; i++) {
   const rolesResult =rolesModelResult[i];
     rolesArray.push(rolesResult.dataValues);
 }
 return rolesArray;
}

const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
    
 let rolesResult = await sequelize.query(
    
    ` SELECT * FROM roles as p
    WHERE concat (UPPER (rol_descripcion), ' ',
    UPPER (usuario),' ', 
    UPPER (rol_fecha::TEXT),' ') 
    LIKE :q 
`,
{
    replacements: {
        
        q: `%${query.toUpperCase()}%`,
},
  
}
);
rolesResult = (rolesResult && rolesResult[0]) ? rolesResult [0] : [];
 console.log("rolesResult", rolesResult);
 
 return rolesResult;
}

const getById = async (codigo) => {
    //Buscar en base de datos
    const rolesModelResult = await RolesModel.findByPk (codigo);
    //console.log("find  codigo", codigo);
    if (rolesModelResult){

        return rolesModelResult.dataValues;
    }else {
        return null;
    }
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const rolesModelResult = await RolesModel.create (data);
    return rolesModelResult.dataValues;
   
}

const update  = async (data, id) => {

    const rolesModelCount= await RolesModel.update (data, {
 
         where :{
            rol_codigo: id,
        },
    });
    console.log("update data", rolesModelCount.datavalues);
    return data;
}


const remove = async (rol_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", rol_codigo);
    const rolesModelCount = await RolesModel.destroy({
        where :{
            rol_codigo,
        }
    })
    //eliminar el data en la bd
    if(rolesModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove 
    } 

    

