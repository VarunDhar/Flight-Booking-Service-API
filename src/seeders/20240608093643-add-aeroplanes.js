'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Aeroplanes', [
      {
        modelNo:"airbus500",
        capacity:330,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNo:"boeing660",
        capacity:500,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Aeroplanes', {[Op.or]:[{modelNo:"boeing660"},{modelNo:"airbus500"}]});
  }
};
