'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      // fullname: 'Nguyen Van A',
      // email: 'abcde@gmail.com',
      // phone_number: '0966666666',
      // address:'USA',
      // password:'123456',
      // role_id:'R1',
      // delete:'1',
      // createdAt: new Date(),
      // updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
