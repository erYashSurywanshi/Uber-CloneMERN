const axios = require("axios");
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinates = async (address) => {
  try {
    const apiKey = process.env.GEOAPIFY_API_KEY;
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;
    const response = await axios.get(url);

    if (response.data.features?.length > 0) {
      const [lng, lat] = response.data.features[0].geometry.coordinates;
      return { lat, lng };
    }
    throw new Error("No results found for the given address.");
  } catch {
    throw new Error("Failed to fetch coordinates.");
  }
};

module.exports.getDistanceAndTime = async (origin, destination) => {
  try {
    const apiKey = process.env.GEOAPIFY_API_KEY;
    const originCoordinates = await module.exports.getAddressCoordinates(origin);
    const destinationCoordinates = await module.exports.getAddressCoordinates(destination);

    const url = `https://api.geoapify.com/v1/routing?waypoints=${originCoordinates.lat},${originCoordinates.lng}|${destinationCoordinates.lat},${destinationCoordinates.lng}&mode=drive&apiKey=${apiKey}`;
    const response = await axios.get(url);

    if (response.data.features?.length > 0) {
      const { distance, time } = response.data.features[0].properties;

      // Ensure valid values for distance and time
      if (typeof distance !== 'number' || typeof time !== 'number') {
        throw new Error("Invalid distance or time values returned by Geoapify API.");
      }

      return { distance, time };
    }
    throw new Error("No route found.");
  } catch (error) {
    throw new Error("Failed to fetch distance and time.");
  }
};

module.exports.getAddressSuggestions = async (input) => {
  try {
    if (!input || input.length < 3) throw new Error("Input must be at least 3 characters long.");

    const apiKey = process.env.GEOAPIFY_API_KEY;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`;
    const response = await axios.get(url);

    if (response.data.features?.length > 0) {
      return response.data.features.map((feature) => ({
        name: feature.properties.formatted,
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0],
      }));
    }
    throw new Error("No suggestions found for the given input.");
  } catch {
    throw new Error("Failed to fetch address suggestions.");
  }
};

module.exports.getCaptainsInTheRadius =async(ltd, lng, radius)=>{

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371] // radius in radians (radius in km / Earth's radius in km)
            }
        },
        isAvailable: true
    });
    return captains;
}