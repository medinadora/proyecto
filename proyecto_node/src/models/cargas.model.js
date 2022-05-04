const { DataTypes } = require('sequelize');
const {sequelize} = require ("../service/bd.service");
const cargasModel = sequelize.define('cargas', {
  // Model attributes are defined 
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  origen_destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
   fecha: {
    type: DataTypes.DATE,
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