const { UsuarioModel } = require("../models/usuarios.model");
const { sequelize } = require("../service/bd.service");
const { QueryTypes } = require("sequelize");

const jwt = require("jsonwebtoken");
// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResult = await UsuarioModel.findAll();

  const usuariosArray = new Array();
  for (let i = 0; i < usuarioModelResult.length; i++) {
    const usuariosResult = usuarioModelResult[i];
    usuariosArray.push(usuariosResult.dataValues);
  }

  return usuariosArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

  let usuariosResult = await sequelize.query(
    ` SELECT * FROM usuarios as u
                                              WHERE concat(UPPER (usu_nombre) , ' ',
                                              (usu_apellido) ,' ', 
                                              (usu_documento::TEXT),' ') 
    LIKE :q 
    `,
    //ORDER BY (usu_nombre)
    {
      replacements: {
        q: `%${query.toUpperCase()}%`,
      },
      //type: QueryTypes.SELECT,
    }
  );

  usuariosResult = (usuariosResult && usuariosResult [0]) ? usuariosResult[0] : [];

  console.log("usuariosResult", usuariosResult);

  return usuariosResult;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const usuarioModelResult = await UsuarioModel.findByPk(codigo);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);
  const usuarioModelResult = await UsuarioModel.create(data);
  return usuarioModelResult.dataValues;
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
  let usuariosResult = await sequelize.query(
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

  

  if (usuariosResult && usuariosResult.length > 0) {
    if(usuariosResult[0].token && usuariosResult[0].usu_codigo != ''){
      return {
        token : usuariosResult[0].token
      };
    }else{
      const payload = {
        usu_nombre: data.usu_nombre,
        usu_codigo: usuariosResult[0].usu_codigo,
      };
  
      var token = jwt.sign(payload, "1234");
  
      let updateTokenUsuarioResult = await sequelize.query(
                                             `UPDATE usuarios
                                              SET token = :t
                                              WHERE usu_codigo = :i`,
        {
          replacements: {
             t: token,
            i: usuariosResult[0].usu_codigo
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

  let updateTokenUsuarioResult = await sequelize.query(
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
