const CrudRepository = require("./crud-repository");
const {Flight,Aeroplane,Airport} = require("../models");
const AppError = require("../utils/errors/app-error");
const { Sequelize } = require("sequelize");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(query){
        const flights = await this.model.findAll({
            where:query,
            include:[
                {
                    model:Aeroplane,
                    required:true,
                    as:'Aeroplane'
                },
                {
                    model:Airport,
                    require:true,
                    on:{
                        col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departure_airport.code"))
                    },
                    as:"departure_airport"
                },
                {
                    model:Airport,
                    require:true,
                    on:{
                        col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrival_airport.code"))
                    },
                    as:"arrival_airport"
                }
            ]
        });
        if(!flights){
            throw new AppError("Error: Resource not found", StatusCodes.NOT_FOUND);
        }
        return flights;
    }
}

module.exports = FlightRepository;