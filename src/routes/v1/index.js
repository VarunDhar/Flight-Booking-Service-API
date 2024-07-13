const express = require("express");
const router = express.Router();
const aeroplaneRoutes = require("./aeroplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

router.use('/aeroplane',aeroplaneRoutes);
router.use('/city',cityRoutes);
router.use('/airport',airportRoutes)
module.exports = router;