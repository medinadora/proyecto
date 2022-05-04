const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_trans', 'postgres', '1234', {
    host: 'localhost',
    port:5434,
    dialect:'postgres' 
  });

  const testConnection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Conexion exitosa');
  } catch (error) {
    console.error('No se ha podido conectar', error);
  }
}
 testConnection ();

    const db ={
     Sequelize,
     sequelize

    }

   module.exports = db;