const express = require("express");
const router = express.Router();
const {airportController} = require("../../controllers");
const { airportMiddleware } = require("../../middlewares");

router.post('/',[airportMiddleware.validateCreateRequest],airportController.createAirport);
router.get('/:id',airportController.getAirport);
router.get('/',airportController.getAllAirports);
router.delete('/:id',airportController.deleteAirport);
router.patch('/',airportController.updateAirport);

module.exports = router;