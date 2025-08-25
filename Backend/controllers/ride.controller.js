const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const {sendMessageToSocketId} =  require('../socket')

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;

  try {
    // create ride in DB
    const ride = await rideService.createRide({
      pickup,
      destination,
      vehicleType,
      userId: req.user._id,
    });

    res.status(201).json({ ride });

    process.nextTick(async () => {
      try {
        // get pickup coordinates
        const pickupCoordinates = await mapService.getAddressCoordinates(
          pickup
        );
        console.log("✅ Pickup coordinates:", pickupCoordinates);

        // find captains in 2km radius
        const captainsInRadius = await mapService.getCaptainsInTheRadius(
          pickupCoordinates.lat,
          pickupCoordinates.lng,
          5
        );
         ride.otp =""

         captainsInRadius.map(captain=>{
            
            sendMessageToSocketId(captain.socketId, {
                event: "new-ride",
                ride})
         })

      } catch (bgError) {
        console.error(" Background task failed:", bgError.message);
      }
    });
  } catch (error) {
    console.error("createRide error:", error.message);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

module.exports.getfare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { pickup, destination } = req.query;

    if (!pickup || !destination) {
      return res
        .status(400)
        .json({ error: "Pickup and destination locations are required" });
    }

    // get distance & time
    const distanceTimeResult = await rideService.getDistanceAndTime(
      pickup,
      destination
    );

    // calculate fare
    const fareResult = await rideService.getfare(
      distanceTimeResult.distance,
      distanceTimeResult.time
    );

    return res.status(200).json({ fare: fareResult });
  } catch (error) {
    console.error(" getfare error:", error.message);
    return res
      .status(500)
      .json({ error: error.message || "Error calculating fare" });
  }
};
