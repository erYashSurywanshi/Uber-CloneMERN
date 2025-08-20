const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const MapController = require('../controllers/map.controller');
const { query } = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser, MapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authMiddleware.authUser, MapController.getDistanceAndTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authMiddleware.authUser, MapController.getSuggestions
);


module.exports = router;