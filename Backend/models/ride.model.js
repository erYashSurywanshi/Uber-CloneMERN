const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Captain',
  },
  pickup: {
    type: String,
    required: true,
    minlength: 3,
  },
  destination: {
    type: String,
    required: true,
    minlength: 3,
  },
  distance: {
    type: Number,
    required: true, // Ensure distance is required
  },
  duration: {
    type: Number,
    required: true, // Ensure duration is required
  },
  fare: {
    type: Number,
    required: true, // Ensure fare is required
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'],
    default: 'pending',
  },
  otp:{
    type: String,
    selact: false, // Do not select OTP by default
    required: true, // Ensure OTP is required
    
  },
  paymentId: String,
  orderId: String,
  signature: String,
});

module.exports = mongoose.model('Ride', rideSchema);