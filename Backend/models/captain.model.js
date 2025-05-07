const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: 3,
        },
        lastname: {
            type: String,
            required: true,
            minlength: 3,
        },
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
        match: /.+\@.+\..+/,

    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type: String,
            required: true,
        },
        plate:{
            type: String,
            required: true,
        },
        capacity:{
            type: Number,
            required: true,
            minlength: [1, 'Capicity must be at least 1'],
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto'],
        }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        },
    }
    
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel =mongoose.model("captain", captainSchema);

module.exports = captainModel;