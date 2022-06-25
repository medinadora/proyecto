const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");

const PruebaModel = sequelize.define(
  "pruebas", {
  // Model attributes are defined 
  pru_codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  pru_nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pru_descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pru_color: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "pruebas",
  timestamps: false
});
module.exports = {
  PruebaModel
};