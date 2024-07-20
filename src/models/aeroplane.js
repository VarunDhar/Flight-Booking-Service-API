'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aeroplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey:{
          name:'aeroplaneId'
        },
        onDelete:'cascade'});
      this.hasMany(models.seats,{
        foreignKey:'aeroplaneId',
        onDelete:'cascade'
      })
    }
  }
  Aeroplane.init({
    modelNo: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:true
      }
    },
    capacity:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        max:750
      }
    } 
  }, {
    sequelize,
    modelName: 'Aeroplane',
  });
  return Aeroplane;
};