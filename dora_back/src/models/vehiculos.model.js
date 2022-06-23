const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");

const vehiculosModel = sequelize.define("vehiculos", {
  // Model attributes are defined here
 
  vehi_codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  vehi_tipo_vehiculo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehi_chapa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehi_color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehi_estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehi_chofer: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: "vehiculos",
    timestamps: false,
});

module.exports = {
  vehiculosModel
}
;