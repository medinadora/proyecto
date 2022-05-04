const {sequelize} = require("../service/bd.service");
const {usuariosModel }= require('../models/usuarios.model');
const { QueryTypes } = require("sequelize");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const usuariosModelResult = await usuariosModel.findAll ();
 
 
 console.log("usuariosResult", usuariosModelResult);
 const usuariosArray = new Array();
 for (let i = 0; i < usuariosModelResult.length; i++) {
   const usuariosResult = usuariosModelResult[i];
   usuariosArray.push(usuariosResult.dataValues);
 }

 return usuariosArray;
}



const listFilter = async (query, pageStar = 1, pageLimit = 10) => {

 //const cargasModelResult = await cargasModel.findAll ();
 let usuariosResult = await sequelize.query(`SELECT * 
                                             FROM USUARIOS
                                             WHERE (UPPER (usu_nombre) LIKE :q
                                             OR UPPER (usu_apellido) LIKE :q)
                                             ORDER BY usu_codigo`, {
                                                 replacements: { q:(query ? '%' + query.toUpperCase() + '%' : '%') 
                                                },
                                                ///type: QueryTypes.SELECT
                                             });

 
usuariosResult = (usuariosResult && usuariosResult[0]) ? usuariosResult [0] : [];
 console.log("usuariosResult", usuariosResult);
 
 return usuariosResult;
}

const getById = async (codigo) => {
    //Buscar en base de datos
    const usuariosModelResult = await usuariosModel.findByPk (codigo);
    //console.log("find  codigo", codigo);
    if (usuariosModelResult){

        return usuariosModelResult.dataValues;
    }else {
        return null;
    }
    
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const usuariosModelResult = await usuariosModel.create (data);
    return usuariosModelResult.dataValues;
    // if (usuariosModelResult){

    //     return usuariosModelResult.dataValues;
    // }else {
    //     return null;
    // }
    
}
//Actualizar en base de datos

const update  = async (data) => {
    
    console.log("update data", data);
    const usuariosModelCount= await usuariosModel.update (data,{
 
       where :{
         usu_codigo: data.usu_codigo,
        }
     });

     if (usuariosModelCount > 0){
      const usuariosModelResult = await usuariosModel.findByPk(data.usu_codigo);
    return usuariosModelResult.dataValues;
    }else {
        return null;
     }
     
}

const remove = async (usu_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", usu_codigo);
    const usuariosModelCount = await usuariosModel.destroy({
        
        where :{
            usu_codigo
        },
    });
    //eliminar el data en la bd
    if(usuariosModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove,
    } 

    

