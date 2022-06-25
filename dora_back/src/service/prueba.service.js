const { sequelize} = require("../service/bd.service");
const { PruebaModel }= require('../models/prueba.model');
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const pruebaModelResult = await PruebaModel.findAll ();
 
 const pruebasArray = new Array();
 for (let i = 0; i < pruebaModelResult.length; i++) {
   const pruebasResult = pruebaModelResult[i];
     pruebasArray.push(pruebasResult.dataValues);
 }
 return pruebasArray;
}

const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
    
 let pruebasResult = await sequelize.query(
    
    ` SELECT * FROM pruebas as p
    WHERE concat (UPPER (pru_nombre), ' ',
    UPPER (pru_descripcion),' ', 
    UPPER (pru_color::TEXT),' ') 
    LIKE :q 
`,
{
    replacements: {
        
        q: `%${query.toUpperCase()}%`,
},
  
}
);
pruebasResult = (pruebasResult && pruebasResult[0]) ? pruebasResult [0] : [];
 console.log("pruebasResult", pruebasResult);
 
 return pruebasResult;
}

const getById = async (codigo) => {
    //Buscar en base de datos
    const pruebaModelResult = await PruebaModel.findByPk (codigo);
    //console.log("find  codigo", codigo);
    if (pruebaModelResult){

        return pruebaModelResult.dataValues;
    }else {
        return null;
    }
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const pruebaModelResult = await PruebaModel.create (data);
    return pruebaModelResult.dataValues;
   
}

const update  = async (data, id) => {

    const pruebaModelCount= await PruebaModel.update (data, {
 
         where :{
            pru_codigo: id,
        },
    });
    console.log("update data", pruebaModelCount.datavalues);
    return data;
}


const remove = async (pru_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", pru_codigo);
    const pruebaModelCount = await PruebaModel.destroy({
        where :{
            pru_codigo,
        }
    })
    //eliminar el data en la bd
    if(pruebaModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove 
    } 

    

