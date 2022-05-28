const { UsuarioModel } = require("../models/usuarios.model");
const { sequelize } = require("../service/bd.service");
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResults = await UsuarioModel.findAll();

  const usuariosArray = new Array();
  for (let i = 0; i < usuarioModelResults.length; i++) {
    const usuariosResult = usuarioModelResults[i];
    usuariosArray.push(usuariosResult.dataValues);
  }

  return usuariosArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

  console.log("aa")
  console.log(query)
  let usuariosResults = await sequelize.query(
    ` 
    SELECT *FROM usuarios WHERE concat(UPPER (usu_nombre) ,  ' ', UPPER (usu_apellido) ,' ', 
     UPPER (usu_documento::TEXT),' ',UPPER (usu_telefono))  LIKE :q ORDER BY usu_nombre`,
    {
      replacements: {
        q: (`%${query.toUpperCase()}%`),
      },
      type: QueryTypes.SELECT,
    }
  );

  //usuariosResults = (usuariosResults && usuariosResults [0]) ? usuariosResults[0] : [];

  console.log("usuariosResults", usuariosResults);

  return usuariosResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const usuarioModelResults = await UsuarioModel.findByPk(codigo);

  if (usuarioModelResults) {
    return usuarioModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const usuarioModelResults = await UsuarioModel.create(data);
  return usuarioModelResults.dataValues;
  // if (usuarioModelResults) {
  //   return usuarioModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const usuarioModelCount = await UsuarioModel.update(data, {
    where: {
      usu_codigo: id,
    },
  });
  console.log("update data", usuarioModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (usu_codigo) => {
  console.log("remove codigo", usu_codigo);

  const usuarioModelCount = await UsuarioModel.destroy({
    where: {
      usu_codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};



const login = async (data) => {
  console.log("login data", data);
  //buscar al usuario por nombre y contrasenha
  let usuariosResults = await sequelize.query(
                                           `SELECT usu_codigo, usu_nombre, token
                                            FROM usuarios
                                            WHERE usu_nombre = :n
                                            AND usu_contrasenha = :p LIMIT 1 `,
    {
      replacements: {
        n: data.usu_nombre,
        p: data.usu_contrasenha,
      },
      type: QueryTypes.SELECT,
    });

  

  if (usuariosResults && usuariosResults.length > 0) {
    if(usuariosResults[0].token && usuariosResults[0].usu_codigo != ''){
      return {
        token : usuariosResults[0].token
      };
    }else{
      const payload = {
        usu_nombre: data.usu_nombre,
        usu_codigo: usuariosResults[0].usu_codigo,
      };
  
      var token = jwt.sign(payload, "1234");
  
      let updateTokenUsuarioResults = await sequelize.query(
                                             `UPDATE usuarios
                                              SET token = :t
                                              WHERE usu_codigo = :i`,
        {
          replacements: {
             t: token,
            i: usuariosResults[0].usu_codigo
          },
          type: QueryTypes.UPDATE,
        });
  
      return {
        token,
      };
    }
   
  } else {
    throw new Error(" Datos de nombre y contrasenha invalidados");
  }

};

const logout = async (usuarioId) => {

  let updateTokenUsuarioResults = await sequelize.query(
                                                     `UPDATE usuarios
                                                     SET token = null
                                                     WHERE usu_codigo = :i`,
{
         replacements: {
         i: usuarioId
},
       type: QueryTypes.UPDATE,

});
return ;
};
module.exports = {
  list, listFilter, create, getById, update, remove, login, logout,
};
