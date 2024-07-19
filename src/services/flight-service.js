const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const result = await flightRepository.create(data);
        return result;

    } catch (error) {
        if(error.name == 'ValidationError' || error.name == 'SequelizeValidationError'){
            let errorList = [];
            error.errors.forEach(err => {
                errorList.push(err.message);
            });
            throw new AppError(errorList,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Error : Creating data for Flight repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){
    let filter = {};
    [departureAirportId,arrivalAirportId] = query.trips.split("-");

    if(departureAirportId == arrivalAirportId){
        throw new AppError("Error : Departure and Arrival airport cannot be same",StatusCodes.BAD_REQUEST);
    }
    filter.arrivalAirportId = arrivalAirportId;
    filter.departureAirportId = departureAirportId;

    if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        if(minPrice.length == 0){
            minPrice = 0;
        }
        if(maxPrice.length == 0){
            maxPrice = 100000;
        }
        filter.price = {
            [Op.between] : [minPrice,maxPrice]
        }
    }
    if(query.travellers){
        filter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        let tripEndDate = query.tripDate + " 23:59:59";
        filter.departureTime = {
            [Op.between]:[query.tripDate,tripEndDate]
        }
    }
    try {
        const flights = await flightRepository.getAllFlights(filter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError("Error : Fetching data for all Flight repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function destroyFlight(data){
//     try {
//         const result = await flightRepository.destroy(data);
//         return result;
//     } catch (error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND){
//             throw new AppError("Error: Invalid id request for delete Flight", StatusCodes.NOT_FOUND);
//         }
//         throw new AppError("Error: Deleting flight", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function getOneFlight(data){
//     try {
//         const result = await flightRepository.getOne(data);
//         return result;
//     } catch (error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND){
//             throw new AppError("Error: Invalid id request for get one Flight", StatusCodes.NOT_FOUND);
//         }
//         throw new AppError("Error: GetOne Flight", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function getAllFlights(){
//     try {
//         const result = await flightRepository.getAll();
//         return result;
//     } catch (error) {
//         throw new AppError("Error: GetAll Flights", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function updateFlight({id,updateParam}){
//     try {
//         const result = await flightRepository.update(id,updateParam);
//         return result;
//     } catch (error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND){
//             throw new AppError("Error: Invalid id request for update flight", StatusCodes.NOT_FOUND);
//         }
//         throw new AppError("Error: Update flight", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

module.exports = {
    createFlight,
    getAllFlights
    // destroyFlight,
    // getAllFlights,
    // getOneFlight,
    // updateFlight
};