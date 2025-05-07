const userModel = require('../models/user.model'); 
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const BlacklistTokenModel = require('../models/BlacklistToken');

module.exports.registerUser= async (req,res,next)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()});
    }

    
    const {fullname,email,password}= req.body;

    // Check if user with email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: "Email already registered" });
    }

    //this method will create before in  usermodel
    const hashPassword = await userModel.hashPassword(password);

    const user =await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword
    });
     
    const token = user.generateAuthToken();

    res.status(201).json({token,user});
}

module.exports.loginUser= async (req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()});
    }

    const {email,password}= req.body;

    // Use userModel.findOne if userService.findUserByEmail is not implemented

    const user = await userModel.findOne({email}).select('+password');
    
    

    // Use bcrypt to compare password
    const isMatch = await user.comparePassword(password, user.password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const token = user.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({token,user});
}

module.exports.getUserProfile = async(req,res,next)=>{

    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req,res,next)=>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    await BlacklistTokenModel.create({token});
    res.status(200).json({message:"Logout successfully"});
}