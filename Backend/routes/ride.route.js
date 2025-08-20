const express = require('express');
const router = express.Router();
const { body,query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create-ride', 
    authMiddleware.authUser,
    body("pickup").isString().isLength({ min: 3 }).withMessage("Pickup location is required"),
    body("destination").isString().isLength({ min: 3 }).withMessage("Destination location is required"), // Fix field name
    body("vehicleType").isString().isIn(['auto', 'car', 'bike']).withMessage("Vehicle type must be one of: auto, car, bike"),
    rideController.createRide
);

router.get('/get-fare', 
    authMiddleware.authUser,
    query("pickup").isString().isLength({ min: 3 }).withMessage("Pickup location is required"),
    query("destination").isString().isLength({ min: 3 }).withMessage("Destination location is required"),
    rideController.getfare
);

module.exports = router;