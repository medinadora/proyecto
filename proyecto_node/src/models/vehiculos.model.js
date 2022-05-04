const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");

const vehiculosModel = sequelize.define('vehiculo', {
  // Model attributes are defined here
 
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_vehiculo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  chapa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
   chofer: {
    type: DataTypes.STRING,
    allowNull: false
  }


}, {
  // Other model options go here
  tableName: 'vehiculo',
  createdAt: false,
  updatedAt: false
});

module.exports = {
  vehiculosModel
}
;