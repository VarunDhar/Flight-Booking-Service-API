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

module.exports = {
    createAeroplane
};