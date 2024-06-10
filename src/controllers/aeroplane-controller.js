const { Logger } = require("../config");
const {AeroplaneServices} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {successResponse, errorResponse} = require("../utils/common");
async function createAeroplane(req,res){
    try {
        const aeroplane = await AeroplaneServices.createAeroplane({
            modelNo:req.body.modelNo,
            capacity:req.body.capacity
        });
        successResponse.data = aeroplane;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        Logger.error("Error: creating aeroplane");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function deleteAeroplane(req,res){
    try {
        const removedAeroplane = await AeroplaneServices.destroyAeroplane(req.params.id);
        successResponse.data = removedAeroplane;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: deleting aeroplane");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAeroplane(req,res){
    try {
        const aeroplane = await AeroplaneServices.getOneAeroplane(req.params.id);
        successResponse.data = aeroplane;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: getting one aeroplane");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAllPlanes(req,res){
    try {
        const aeroplanes = await AeroplaneServices.getAllAeroplanes();
        successResponse.data = aeroplanes;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: fetching all aeroplanes");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function updateAeroplane(req,res){
    try {
        //console.log(req.body);
        const aeroplane = await AeroplaneServices.updateAeroplane({id:req.body.id,updateParam:req.body.updateParam});
        successResponse.data = aeroplane;
        //console.log("here");
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        Logger.error("Error: updating aeroplane");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    createAeroplane,
    deleteAeroplane,
    getAeroplane,
    getAllPlanes,
    updateAeroplane
};