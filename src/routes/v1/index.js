const express = require("express");
const router = express.Router();
const aeroplaneRoutes = require("./aeroplane-routes");
const cityRoutes = require("./city-routes");

router.use('/aeroplane',aeroplaneRoutes);
router.use('/city',cityRoutes);

module.exports = router;