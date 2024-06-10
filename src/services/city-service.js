const { StatusCodes } = require("http-status-codes");
//const { Logger } = require("../config");
const {CityRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const result = await cityRepository.create(data);
        return result;

    } catch (error) {
        console.log(error);
        if(error.name == 'ValidationError' || error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let errorList = [];
            error.errors.forEach(err => {
                errorList.push(err.message);
            });
            throw new AppError(errorList,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Error : Creating for City repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyCity(data){
    try {
        const result = await cityRepository.destroy(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for delete city", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Deleting city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getOneCity(data){
    try {
        const result = await cityRepository.getOne(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for get one city", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: GetOne city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCities(){
    try {
        const result = await cityRepository.getAll();
        return result;
    } catch (error) {
        throw new AppError("Error: GetAll cities", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity({id,updateParam}){
    try {
        const result = await cityRepository.update(id,updateParam);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for update city", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Update city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    destroyCity,
    getOneCity,
    getAllCities,
    updateCity
};