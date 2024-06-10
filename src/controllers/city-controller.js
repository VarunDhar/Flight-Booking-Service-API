const { Logger } = require("../config");
const {CityServices} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {successResponse, errorResponse} = require("../utils/common");
async function createCity(req,res){
    try {
        const City = await CityServices.createCity({
            name:req.body.name,
        });
        successResponse.data = City;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        Logger.error("Error: creating city");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function deleteCity(req,res){
    try {
        const removedCity = await CityServices.destroyCity(req.params.id);
        successResponse.data = removedCity;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: deleting City");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getCity(req,res){
    try {
        const city = await CityServices.getOneCity(req.params.id);
        successResponse.data = City;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: getting one City");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAllCities(req,res){
    try {
        const Citys = await CityServices.getAllCities();
        successResponse.data = Citys;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: fetching all Cities");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function updateCity(req,res){
    try {
        const City = await CityServices.updateCity({id:req.body.id,updateParam:req.body.updateParam});
        successResponse.data = City;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: updating City");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    getAllCities,
    updateCity
};