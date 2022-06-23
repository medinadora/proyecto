const { sequelize} = require("../service/bd.service");
const { CargaModel }= require('../models/cargas.model');
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const cargaModelResult = await CargaModel.findAll ();
 
 const cargasArray = new Array();
 for (let i = 0; i < cargaModelResult.length; i++) {
   const cargasResult = cargaModelResult[i];
     cargasArray.push(cargasResult.dataValues);
 }
 return cargasArray;
}

const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
    
 let cargasResult = await sequelize.query(
    //  `SELECT * FROM cargas as c
    //                                               WHERE UPPER (car_empresa) LIKE :q
    //                                               OR UPPER (car_origen_destino) LIKE :q
    //                                               OR UPPER (car_tipo) LIKE :q
    //                                               ORDER BY car_empresa`,
    ` SELECT * FROM cargas as c
    WHERE concat (UPPER (car_empresa), ' ',
    UPPER (car_tipo),' ', 
    UPPER (car_origen_destino::TEXT),' ') 
    LIKE :q 
`,
{
    replacements: {
        //q: query ? "%" + query.toUpperCase() + "%" : "%",
        q: `%${query.toUpperCase()}%`,
},
   // type: QueryTypes.SELECT,
}
);
cargasResult = (cargasResult && cargasResult[0]) ? cargasResult [0] : [];
 console.log("cargasResult", cargasResult);
 
 return cargasResult;
}

const getById = async (codigo) => {
    //Buscar en base de datos
    const cargaModelResult = await CargaModel.findByPk (codigo);
    //console.log("find  codigo", codigo);
    if (cargaModelResult){

        return cargaModelResult.dataValues;
    }else {
        return null;
    }
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const cargaModelResult = await CargaModel.create (data);
    return cargaModelResult.dataValues;
    // if (cargaModelResult){

    //     return cargaModelResult.dataValues;
    // }else {
    //     return null;
    // }
}

const update  = async (data, id) => {

    const cargaModelCount= await CargaModel.update (data, {
 
         where :{
            car_codigo: id,
        },
    });
    console.log("update data", cargaModelCount.datavalues);
    return data;
}


const remove = async (car_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", car_codigo);
    const cargaModelCount = await CargaModel.destroy({
        where :{
            car_codigo,
        }
    })
    //eliminar el data en la bd
    if(cargaModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove 
    } 

    

