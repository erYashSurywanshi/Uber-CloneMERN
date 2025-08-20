const mapsService = require("../services/maps.service");
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { address } = req.query;
        res.status(200).json({ coordinates: await mapsService.getAddressCoordinates(address) });
    } catch (error) {
        next(error);
    }
};

module.exports.getDistanceAndTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { origin, destination } = req.query;
        res.status(200).json({ distanceAndTime: await mapsService.getDistanceAndTime(origin, destination) });
    } catch (error) {
        next(error);
    }
};

module.exports.getSuggestions = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { input } = req.query;
        res.status(200).json({ suggestions: await mapsService.getAddressSuggestions(input) });
    } catch (error) {
        next(error);
    }
};