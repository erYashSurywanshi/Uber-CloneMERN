const rideService = require('../services/ride.service');

async function getDistanceAndFare(req, res) {
  try {
    const { pickup_location, destination_location } = req.query;
    
    if (!pickup_location || !destination_location) {
      return res.status(400).json({ 
        message: "Pickup and destination locations are required" 
      });
    }

    const result = await rideService.getDistanceAndFare(pickup_location, destination_location);
    
    res.json({
      status: "success",
      fare: result.fare,
      distance: result.distance,
      duration: result.time
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      message: "Error calculating fare",
      error: error.message 
    });
  }
}

module.exports = {
  getDistanceAndFare
};
