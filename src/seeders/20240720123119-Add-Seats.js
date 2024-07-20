'use strict';
const {Enums} = require("../utils/common");
const {BUSINESS,PREMIUM_ECONOMY,ECONOMY,FIRST_CLASS} = Enums.SEAT_TYPE;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        aeroplaneId:13,
        row:1,
        col:'A',
        classType:FIRST_CLASS,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:1,
        col:'B',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        aeroplaneId:13,
        row:1,
        col:'C',
        classType:BUSINESS,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:1,
        col:'D',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:1,
        col:'E',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:1,
        col:'F',
        classType:FIRST_CLASS,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:2,
        col:'A',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:2,
        col:'B',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        aeroplaneId:13,
        row:2,
        col:'C',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:2,
        col:'D',
        classType:BUSINESS,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:2,
        col:'E',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aeroplaneId:13,
        row:2,
        col:'F',
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
  }
};
