const express = require("express");
const router = express.Router();
const {aeroplaneController} = require("../../controllers");

router.post('/',aeroplaneController.createAeroplane);
router.get('/:id',aeroplaneController.getAeroplane);
router.get('/',aeroplaneController.getAllPlanes);
router.delete('/:id',aeroplaneController.deleteAeroplane);
router.patch('/',aeroplaneController.updateAeroplane);
module.exports = router;