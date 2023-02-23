'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_details.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    oldPrice:DataTypes.INTEGER,
    num:DataTypes.INTEGER,
    total_money:DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Order_details',
  });
  return Order_details;
};