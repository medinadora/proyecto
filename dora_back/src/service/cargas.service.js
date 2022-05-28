const {sequelize} = require("../service/bd.service");
const {cargasModel }= require('../models/cargas.model');
const { QueryTypes } = require("sequelize");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const cargasModelResult = await cargasModel.findAll ();

 console.log("cargasResult", cargasModelResult);
 const cargasArray = new Array();
 for (let i = 0; i < cargasModelResult.length; i++) {
   const cargasResult = cargasModelResult[i];
     cargasArray.push(cargasResult.dataValues);
 }

 return cargasArray;
}

const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
 let cargasResult = await sequelize.query(
     `SELECT * 
                                                  FROM cargas
                                                  WHERE UPPER (car_empresa) LIKE :q
                                                  OR UPPER (car_origen_destino) LIKE :q
                                                  OR UPPER (car_tipo) LIKE :q
                                                  ORDER BY car_empresa`,
{
    replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
},
    type: QueryTypes.SELECT,
}
);
 
cargasResult = (cargasResult && cargasResult[0]) ? cargasResult [0] : [];
 console.log("cargasResult", cargasResult);
 
 return cargasResult;
}

const getById = async (car_codigo) => {
    //Buscar en base de datos
    const cargasModelResult = await cargasModel.findByPk (car_codigo);
    //console.log("find  codigo", codigo);
    if (cargasModelResult){

        return cargasModelResult.dataValues;
    }else {
        return null;
    }
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const cargasModelResult = await cargasModel.create (data);
    if (cargasModelResult){

        return cargasModelResult.dataValues;
    }else {
        return null;
    }
}

const update  = async (data) => {
    //Actualizar en base de datos
    console.log("update data", data);
    const cargasModelCount= await cargasModel.update (data,{
 
         where :{
            codigo: data.codigo
        }
    });

    if (cargasModelCount > 0){
      const cargasModelResult = await cargasModel.findByPk(data.codigo);
    return cargasModelResult.dataValues;
    }else {
        return null;
    }
}

const remove = async (car_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", car_codigo);
    const cargasModelCount = await cargasModel.destroy({
        where :{
            car_codigo
        }
    })
    //eliminar el data en la bd
    if(cargasModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove 
    } 

    

