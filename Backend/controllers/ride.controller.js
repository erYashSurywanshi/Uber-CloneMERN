const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


module.exports.createRide = async(req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    try {
        const { pickup, destination, vehicleType } = req.body; 
        const ride = await rideService.createRide({ pickup, destination, vehicleType, userId: req.user._id });
        res.status(201).json({ ride });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}


module.exports.getfare = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    try {
        const { pickup, destination } = req.query;
        
        if (!pickup || !destination) {
            return res.status(400).json({ error: "Pickup and destination locations are required" });
        }

        const distanceTimeResult = await rideService.getDistanceAndTime(pickup, destination);
        const fareResult = await rideService.getfare(distanceTimeResult.distance, distanceTimeResult.time);
        res.status(200).json({ fare: fareResult });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error calculating fare" });
    }
};