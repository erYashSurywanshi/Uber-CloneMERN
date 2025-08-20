const userModel = require('../models/user.model');


module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    try{
        if(!firstname || !email || !password){
            throw new Error('Please provide all fields');
        }
        const user = await userModel.create({
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        })
        return user;
    }catch(error){
        console.error("User creation error:", error);
        throw new Error("Failed to create user: " + error.message);
    }
}