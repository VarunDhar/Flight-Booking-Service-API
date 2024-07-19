const { StatusCodes } = require('http-status-codes');
const { errorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if(!req.body.name || !req.body.code || !req.body.cityId) {
        errorResponse.message = 'Something went wrong while creating Airport';
        errorResponse.error = new AppError('Kindy provide all necessary info (i.e. Name,Code and CityId) (Cannot be NULL)',StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}
