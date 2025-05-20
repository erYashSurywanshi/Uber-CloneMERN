const  express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post("/register", 
    [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name is required"),
    body("vehicle.color").isLength({min:3}).withMessage("Vehicle color is required"),
    body("vehicle.plate").isLength({min:3}).withMessage("Vehicle plate is required"),
    body("vehicle.capacity").isNumeric().withMessage("Vehicle capicity is required"),
    body("vehicle.vehicleType").isLength({min:3}).withMessage("Vehicle type is required"),
    ],
    captainController.registerCaptain
);

router.post("/login",
    [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    ],
    captainController.loginCaptain
);

router.get("/profile", authMiddleware.authCaptian, captainController.getCaptainProfile); ; 
    
router.get("/logout", authMiddleware.authCaptian, captainController.logoutCaptain);

module.exports = router;