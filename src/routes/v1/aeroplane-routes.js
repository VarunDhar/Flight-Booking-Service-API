const express = require("express");
const router = express.Router();
const {aeroplaneController} = require("../../controllers");
const { aeroplaneMiddleware } = require("../../middlewares");

router.post('/',[aeroplaneMiddleware.validateCreateRequest],aeroplaneController.createAeroplane);
router.get('/:id',aeroplaneController.getAeroplane);
router.get('/',aeroplaneController.getAllPlanes);
router.delete('/:id',aeroplaneController.deleteAeroplane);
router.patch('/',aeroplaneController.updateAeroplane);

module.exports = router;