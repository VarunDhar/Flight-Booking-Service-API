const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
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
        console.log(error);
        // Logger.error("Error : Creating data for Aeroplane repo");
        throw new AppError("Error : Creating data for Aeroplane repo",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAeroplane
};