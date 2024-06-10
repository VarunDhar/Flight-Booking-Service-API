const { cityController } = require("../../controllers");
const express = require("express");
const { cityMiddleware } = require("../../middlewares");
const router = express.Router();

router.post('/',[cityMiddleware.validateCreateRequest],cityController.createCity);
router.get('/:id',cityController.getCity);
router.get('/',cityController.getAllCities);
router.delete('/:id',cityController.deleteCity);
router.patch('/',cityController.updateCity);

module.exports = router;