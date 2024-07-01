'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Airports',
      {
        fields:['cityId'],
        type:'foreign key',
        name:'city-foreign-key',
        references:{
          table:'Cities',
          field:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Airports','city-foreign-key');
  }
};