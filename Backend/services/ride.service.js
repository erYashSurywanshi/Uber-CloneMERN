const rideModel = require('../models/ride.model');
const mapServices = require('./maps.service');
const crypto = require('crypto');

module.exports = {
  getDistanceAndTime: async function(pickup, destination) {
    return await mapServices.getDistanceAndTime(pickup, destination);
  },

  getfare: async function(distance, time) {
    const baseFare = { auto: 30, car: 50, bike: 20 };
    const perKmRate = { auto: 10, car: 15, bike: 8 };
    const perMinuteRate = { auto: 2, car: 3, bike: 1 };

    const distanceKm = Number(distance) / 1000;
    const timeMinutes = Number(time) / 60;

    return {
      auto: Math.round(baseFare.auto + distanceKm * perKmRate.auto + timeMinutes * perMinuteRate.auto),
      car: Math.round(baseFare.car + distanceKm * perKmRate.car + timeMinutes * perMinuteRate.car),
      bike: Math.round(baseFare.bike + distanceKm * perKmRate.bike + timeMinutes * perMinuteRate.bike)
    };
  },

  createRide: async function({ pickup, destination, vehicleType, userId }) {
    if (!pickup || !destination || !vehicleType || !userId) {
      throw new Error("All fields are required.");
    }

    const { distance, time } = await mapServices.getDistanceAndTime(pickup, destination);
    const fare = await this.getfare(distance, time);

    return await rideModel.create({
      userId,
      pickup,
      destination,
      distance,
      otp: getOtp(6),
      duration: time,
      fare: fare[vehicleType],
    });
  }
};

function getOtp(num) {
  if (num <= 0) throw new Error("Number of digits must be greater than zero.");
  return crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
}