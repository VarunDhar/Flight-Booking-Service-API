const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

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
async function destroyFlight(data){
    try {
        const result = await flightRepository.destroy(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for delete Flight", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Deleting flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getOneFlight(data){
    try {
        const result = await flightRepository.getOne(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for get one Flight", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: GetOne Flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(){
    try {
        const result = await flightRepository.getAll();
        return result;
    } catch (error) {
        throw new AppError("Error: GetAll Flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateFlight({id,updateParam}){
    try {
        const result = await flightRepository.update(id,updateParam);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for update flight", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Update flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    destroyFlight,
    getAllFlights,
    getOneFlight,
    updateFlight
};