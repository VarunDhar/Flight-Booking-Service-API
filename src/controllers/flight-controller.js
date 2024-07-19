const { Logger } = require("../config");
const {FlightServices} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {successResponse, errorResponse} = require("../utils/common");
async function createFlight(req,res){
    try {
        const flight = await FlightServices.createFlight({
            flightNumber: req.body.flightNumber,
            aeroplaneId: req.body.aeroplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats,
            boardingGate: req.body.boardingGate
        });
        successResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        Logger.error("Error: creating Flight");
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAllFlights(req,res){
    try {
        const flights = await FlightServices.getAllFlights(req.query);
        
        successResponse.data = flights;
        return res.status(StatusCodes.OK).json(successResponse);

    } catch (error) {
        Logger.error("Error: fetching Flights");
        errorResponse.error = error;
        console.log(error);
        return res.status(error.statusCode).json(errorResponse);
    }
    
}

// async function deleteAirport(req,res){
//     try {
//         const removedAirport = await AirportServices.destroyAirport(req.params.id);
//         successResponse.data = removedAirport;
//         return res.status(StatusCodes.OK).json(successResponse);
//     } catch (error) {
//         Logger.error("Error: deleting airport");
//         errorResponse.error = error;
//         return res.status(error.statusCode).json(errorResponse);
//     }
// }

// async function getAirport(req,res){
//     try {
//         const airport = await AirportServices.getOneAirport(req.params.id);
//         successResponse.data = airport;
//         return res.status(StatusCodes.OK).json(successResponse);
//     } catch (error) {
//         Logger.error("Error: getting one airport");
//         errorResponse.error = error;
//         return res.status(error.statusCode).json(errorResponse);
//     }
// }

// async function getAllAirports(req,res){
//     try {
//         const airports = await AirportServices.getAllAirports();
//         successResponse.data = airports;
//         return res.status(StatusCodes.OK).json(successResponse);
//     } catch (error) {
//         Logger.error("Error: fetching all airports");
//         errorResponse.error = error;
//         return res.status(error.statusCode).json(errorResponse);
//     }
// }

// async function updateAirport(req,res){
//     try {
//         const airport = await AirportServices.updateAirport({id:req.body.id,updateParam:req.body.updateParam});
//         successResponse.data = airport;
//         return res.status(StatusCodes.OK).json(successResponse);
//     } catch (error) {
//         Logger.error("Error: updating airport");
//         errorResponse.error = error;
//         return res.status(error.statusCode).json(errorResponse);
//     }
// }

module.exports = {
    createFlight,
    getAllFlights
    // deleteAirport,
    // getAirport,
    // getAllAirports,
    // updateAirport
};