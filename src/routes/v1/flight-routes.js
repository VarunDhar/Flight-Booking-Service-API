const express = require("express");
const router = express.Router();
const {flightController} = require("../../controllers");
const { flightMiddleware } = require("../../middlewares");

router.post('/',[flightMiddleware.validateCreateRequest],flightController.createFlight);
router.get('/',flightController.getAllFlights);
// router.get('/:id',airportController.getAirport);
// router.get('/',airportController.getAllAirports);
// router.delete('/:id',airportController.deleteAirport);
// router.patch('/',airportController.updateAirport);

module.exports = router;