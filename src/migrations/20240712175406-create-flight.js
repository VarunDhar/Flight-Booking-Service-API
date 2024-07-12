'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      aeroplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Aeroplanes',
          key:'id'
        },
        onDelete:'cascade'
      },
      departureAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:'Airports',
          key:'code'
        },
        onDelete:'cascade'
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:'Airports',
          key:'code'
        },
        onDelete:'cascade'
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};