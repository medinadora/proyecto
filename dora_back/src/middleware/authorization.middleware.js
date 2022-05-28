// const { UsuarioModel } = require("../models/usuarios.model");
const { sequelize } = require("../service/bd.service");
 const { QueryTypes } = require("sequelize");


const authorization = async (req, res, next) => {
  const token =  req.headers['x-token']
  console.log("Mi token jjjjjjjjjjjjjjjj",token)

 // 1virificar si el token existe en la bd

 let usuariosResults = await sequelize.query(
                                           `SELECT usu_codigo, usu_nombre, token
                                           FROM usuarios
                                           WHERE token = :t  `,
{
replacements: {
t : token,
},
type: QueryTypes.SELECT,
});

if (usuariosResults && usuariosResults.length > 0) {
req.usuarioId = usuariosResults[0].usu_codigo;
  next();

} else {
//throw new Error ("No se encontro el usuario");
res.send({
  success: false,
  error :'no se pudo autenticar'
});
}



}
module.exports = {
    authorization
  }
