const { DataTypes } = require("sequelize");
const { sequelize } = require("../service/bd.service");

const UsuarioModel = sequelize.define(
  "usuarios",
  {
    // Model attributes are defined here

    usu_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usu_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_documento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    usu_contrasenha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = {
  UsuarioModel,
};
