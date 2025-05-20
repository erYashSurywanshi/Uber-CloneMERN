const BlacklistTokenModel = require('../models/BlacklistToken');
const captainModel = require('../models/captain.model'); // Import the Captain model
const captainService = require('../services/captain.service'); // Import the Captain service
const { validationResult } = require('express-validator'); // Import validation result from express-validator

// Controller function to register a new captain
module.exports.registerCaptain = async (req, res, next) => {
    // Validate the request body
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() }); // Return validation errors if any
    }

    // Extract data from the request body
    const { fullname, email, password, vehicle } = req.body;

    // Check if a captain with the same email already exists
    const isCaptainExist = await captainModel.findOne({ email });
    if (isCaptainExist) {
        return res.status(409).json({ error: "Captain already exists" }); // Return conflict error if captain exists
    }

    // Hash the password before saving it to the database
    const hashPassword = await captainModel.hashPassword(password);

    // Create a new captain using the service layer
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname, // Extract first name from fullname
        lastname: fullname.lastname, // Extract last name from fullname
        email,
        password: hashPassword, // Use the hashed password
        color: vehicle.color, // Vehicle color
        plate: vehicle.plate, // Vehicle plate number
        capacity: vehicle.capacity, // Vehicle capacity
        vehicleType: vehicle.vehicleType, // Type of vehicle
    });

    // Generate an authentication token for the captain
    const token = captain.generateAuthToken();

    // Respond with the created captain and the token
    res.status(201).json({ token, captain });
};

// Controller function to log in an existing captain
module.exports.loginCaptain = async (req, res, next) => {
    // Validate the request body
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() }); // Return validation errors if any
    }

    // Extract email and password from the request body
    const { email, password } = req.body;

    // Find the captain by email and include the password field
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
        return res.status(404).json({ error: "Captain not found" }); // Return not found error if captain doesn't exist
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" }); // Return unauthorized error if passwords don't match
    }

    // Generate an authentication token for the captain
    const token = captain.generateAuthToken();

    // Respond with the captain and the token
    res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain }); // Respond with the captain's profile
}

module.exports.logoutCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; // Get the token from cookies or headers

    await BlacklistTokenModel.create({ token }); // Store the token in the blacklist collection

    res.clearCookie("token"); // Clear the authentication token cookie

    res.status(200).json({ message: "Logout successful" }); // Respond with a success message
}