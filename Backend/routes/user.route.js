const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware')


router.post('/register', [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name is required"),
],
    userController.registerUser
)



router.post('/login', userController.loginUser,[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
],
    userController.loginUser
)

router.get("/profile",authMiddleware.authUser, userController.getUserProfile);

router.get("/logout",authMiddleware.authUser, userController.logoutUser);

module.exports = router;