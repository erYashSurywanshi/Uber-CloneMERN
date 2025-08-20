const userModel = require("../models/user.model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistedTokenModel = require("../models/BlacklistToken");
const captainModel = require("../models/captain.model");


module.exports.authUser =async (req, res, next) => {
    const token =req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
const blacklisted = await blacklistedTokenModel.findOne({ token: token });

    if (blacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        return next();

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports.authCaptian = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const blacklisted = await blacklistedTokenModel.findOne({ token: token });

    if (blacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }
        req.captain = captain;
        return next();

    } catch (err) {
        
        return res.status(401).json({ message: "Unauthorized" });
    }
}