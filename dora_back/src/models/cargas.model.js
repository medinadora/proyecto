const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");
const cargasModel = sequelize.define('cargas', {
  // Model attributes are defined 
  car_codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  car_empresa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  car_tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  car_origen_destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  car_precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
   car_fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cargas_usu: {
   type: DataTypes.INTEGER,
   allowNull: false
 }
}, {
  tableName: 'cargas',
  timestamps: false
});
module.exports = {
  cargasModel
}
;