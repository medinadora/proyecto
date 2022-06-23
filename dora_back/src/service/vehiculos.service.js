const {sequelize} = require("../service/bd.service");
const {vehiculosModel }= require('../models/vehiculos.model');
const { QueryTypes } = require("sequelize");

const list = async (query, pageStar = 1, pageLimit = 10) => {

 const vehiculosModelResult = await vehiculosModel.findAll ();

 console.log("vehiculosResult", vehiculosModelResult);
 const vehiculosArray = new Array();
 for (let i = 0; i < vehiculosModelResult.length; i++) {
   const vehiculosResult = vehiculosModelResult[i];
   vehiculosArray.push(vehiculosResult.dataValues);
 }

 return vehiculosArray;
}



const listFilter = async (query, pageStar = 1, pageLimit = 10) => {

 let vehiculosResult = await sequelize.query( 
     `SELECT * 
                                            FROM  vehiculos as v
                                             WHERE concat (UPPER (vehi_chofer), ' ',
                                             UPPER (vehi_color), ' ',
                                             UPPER (vehi_estado), ' ',
                                             UPPER (vehi_chapa::TEXT), ' ')
                                             LIKE :q
                                             `,
                                             //ORDER BY vehi_codigo`,
                                            //   {
                                            //      replacements: { q:(query ? '%' + query.toUpperCase() + '%' : '%') 
                                            //     },
                                            //     // type: QueryTypes.SELECT
                                            //  });
{
      replacements: {
        q: `%${query.toUpperCase()}%`,
      },
      //type: QueryTypes.SELECT,
    }
  );

 vehiculosResult = (vehiculosResult && vehiculosResult [0]) ? vehiculosResult [0] : [];
 console.log("vehiculosResult", vehiculosResult);
 
 return vehiculosResult;

}

const getById = async (codigo) => {
    //Buscar en base de datos
    const vehiculosModelResult = await vehiculosModel.findByPk (codigo);
    //console.log("find  codigo", codigo);
    if (vehiculosModelResult){

        return vehiculosModelResult.dataValues;
    }else {
        return null;
    }
    
    
}

const create = async (data) => {
    //Guardar en base de datos
    console.log("create data", data);
    const vehiculosModelResult = await vehiculosModel.create (data);
    if (vehiculosModelResult){

        return vehiculosModelResult.dataValues;
    }else {
        return null;
    }
    
}

const update  = async (data, id) => {
    //Actualizar en base de datos
    console.log("update data", data);
    const vehiculosModelCount= await vehiculosModel.update (data,{
 
         where :{
            vehi_codigo: id,
        }
    });

    console.log("update data", vehiculosModelCount.datavalues);
    return data;
     
}

const remove = async (vehi_codigo) => {
    //Eliminar en base de datos
    console.log("borrar codigo", vehi_codigo);
    const vehiculosModelCount = await vehiculosModel.destroy({
        
        where :{
            vehi_codigo
        }
    })
    //eliminar el data en la bd
    if(vehiculosModelCount > 0){
        return true;
    }else{
        return false;
    }
    
}
module.exports = {
    list, listFilter, getById, create, update, remove 
    } 

    

