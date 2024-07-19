const { StatusCodes } = require('http-status-codes');
const { errorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber || !req.body.arrivalAirportId || !req.body.departureAirportId 
        || !req.body.arrivalTime || !req.body.departureTime || !req.body.price
        || !req.body.totalSeats || !req.body.aeroplaneId) {
        errorResponse.message = 'Something went wrong while creating Flight';
        errorResponse.error = new AppError('Kindy provide all necessary info (i.e. flightNumber,arrivalAirportId, departureAirportId, etc.) (Cannot be NULL)',StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}
