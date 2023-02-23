'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
     
      fullname: {
        type: Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      phone_number:{
        type:Sequelize.STRING
      },
      address:{
        type:Sequelize.STRING
      },
      note:{
        type:Sequelize.STRING
      },
      status:{
        type:Sequelize.INTEGER
      },
      order_date:{
        type:Sequelize.DATE
      },
      total_money:{
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};