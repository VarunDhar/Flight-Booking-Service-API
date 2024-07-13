const { StatusCodes } = require("http-status-codes");
const {AirportRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const result = await airportRepository.create(data);
        return result;

    } catch (error) {
        if(error.name == 'ValidationError' || error.name == 'SequelizeValidationError'){
            let errorList = [];
            error.errors.forEach(err => {
                errorList.push(err.message);
            });
            throw new AppError(errorList,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Error : Creating data for Airport repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirport(data){
    try {
        const result = await airportRepository.destroy(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for delete Airport", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Deleting airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getOneAirport(data){
    try {
        const result = await airportRepository.getOne(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for get one Airport", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: GetOne Airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirports(){
    try {
        const result = await airportRepository.getAll();
        return result;
    } catch (error) {
        throw new AppError("Error: GetAll Airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport({id,updateParam}){
    try {
        const result = await airportRepository.update(id,updateParam);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for update airport", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Update airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    destroyAirport,
    getAllAirports,
    getOneAirport,
    updateAirport
};