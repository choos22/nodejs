'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    category_id: {
        type: Sequelize.INTEGER
      },
     
      title: {
        type: Sequelize.STRING
      },
      oldPrice:{
        type:Sequelize.INTEGER
      },
      salePrice:{
        type:Sequelize.INTEGER
      },
      thumbnail:{
        type:Sequelize.STRING
      },
      description:{
        type:Sequelize.TEXT
      },
      delete:{
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
    await queryInterface.dropTable('product');
  }
};