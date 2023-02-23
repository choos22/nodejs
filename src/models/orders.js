'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    email:DataTypes.STRING,
    phone_number:DataTypes.STRING,
    address:DataTypes.STRING,
    note:DataTypes.STRING,
    status:DataTypes.INTEGER,
    order_date:DataTypes.DATE,
    total_money:DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};