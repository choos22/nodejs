'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:DataTypes.STRING,
    phone_number:DataTypes.STRING,
    subject_name:DataTypes.STRING,
    note:DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};