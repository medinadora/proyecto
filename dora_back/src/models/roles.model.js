const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");

const RolesModel = sequelize.define(
  "roles", {
  // Model attributes are defined 
  rol_codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  rol_fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rol_descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "roles",
  timestamps: false
});
module.exports = {
  RolesModel
};