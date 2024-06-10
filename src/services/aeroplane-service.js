const { StatusCodes } = require("http-status-codes");
//const { Logger } = require("../config");
const {AeroplaneRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const aeroplaneRepository = new AeroplaneRepository();

async function createAeroplane(data){
    try {
        const result = await aeroplaneRepository.create(data);
        return result;

    } catch (error) {
        if(error.name == 'ValidationError' || error.name == 'SequelizeValidationError'){
            let errorList = [];
            error.errors.forEach(err => {
                errorList.push(err.message);
            });
            throw new AppError(errorList,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Error : Creating data for Aeroplane repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAeroplane(data){
    try {
        const result = await aeroplaneRepository.destroy(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for delete aeroplane", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Deleting aeroplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getOneAeroplane(data){
    try {
        const result = await aeroplaneRepository.getOne(data);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for get one aeroplane", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: GetOne aeroplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAeroplanes(){
    try {
        const result = await aeroplaneRepository.getAll();
        return result;
    } catch (error) {
        throw new AppError("Error: GetAll aeroplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAeroplane({id,updateParam}){
    try {
        const result = await aeroplaneRepository.update(id,updateParam);
        return result;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Error: Invalid id request for update aeroplane", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Error: Update aeroplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAeroplane,
    destroyAeroplane,
    getOneAeroplane,
    getAllAeroplanes,
    updateAeroplane
};