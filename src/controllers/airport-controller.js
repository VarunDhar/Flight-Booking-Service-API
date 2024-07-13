const { Logger } = require("../config");
const {AirportServices} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {successResponse, errorResponse} = require("../utils/common");
async function createAirport(req,res){
    try {
        const airport = await AirportServices.createAirport({
            name:req.body.name,
            code:req.body.code,
            cityId:req.body.cityId
        });
        successResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        Logger.error("Error: creating airport");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function deleteAirport(req,res){
    try {
        const removedAirport = await AirportServices.destroyAirport(req.params.id);
        successResponse.data = removedAirport;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: deleting airport");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAirport(req,res){
    try {
        const airport = await AirportServices.getOneAirport(req.params.id);
        successResponse.data = airport;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: getting one airport");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAllAirports(req,res){
    try {
        const airports = await AirportServices.getAllAirports();
        successResponse.data = airports;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: fetching all airports");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function updateAirport(req,res){
    try {
        const airport = await AirportServices.updateAirport({id:req.body.id,updateParam:req.body.updateParam});
        successResponse.data = airport;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: updating airport");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    getAirport,
    getAllAirports,
    updateAirport
};