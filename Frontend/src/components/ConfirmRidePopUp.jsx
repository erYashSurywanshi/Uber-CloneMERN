import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [Otp, setOtp] = useState("");

  const sumbitHandle = (e) => {
    e.preventDefault();
    // add validation logic here if needed
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white h-screen flex flex-col items-center p-4 relative">
      
      {/* Close Icon */}
      <button
        onClick={() => props.setConfirmRide(false)}
        className="absolute top-4  text-gray-400 hover:text-gray-600 text-2xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </button>

      {/* Title */}
      <h3 className="text-xl font-bold mt-10 text-gray-800 tracking-wide">
        Final Confirmation
      </h3>

      {/* Rider Info */}
      <div className="mt-6 flex flex-col items-center space-y-2">
        <img
          className="w-20 h-20 rounded-full object-cover shadow-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
          alt="Rider"
        />
        <div className="text-center">
          <h4 className="font-semibold text-gray-700">Himtesh Pawar</h4>
          <p className="text-sm text-gray-500">2.4 km away</p>
        </div>
      </div>

      {/* Location & Fare Info */}
      <div className="w-full mt-6 space-y-3">
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-line text-blue-600 text-xl"></i>
          <div>
            <h5 className="text-gray-800 font-medium">BH531</h5>
            <p className="text-sm text-gray-500">Kajikar Coaching, Mumbai</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <i className="ri-money-rupee-circle-line text-green-600 text-xl"></i>
          <div>
            <h5 className="text-gray-800 font-medium">₹194.34</h5>
            <p className="text-sm text-gray-500">Cash Only</p>
          </div>
        </div>
      </div>

      {/* OTP + Actions */}
      <form
        onSubmit={sumbitHandle}
        className="w-full mt-6 flex flex-col items-center space-y-4"
      >
        <input
          value={Otp}
          onChange={(e) => setOtp(e.target.value)}
          type="number"
          placeholder="Enter OTP"
          className="w-full text-center font-mono text-sm border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <Link
          to="/Captain-riding"
          className="w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          Confirm
        </Link>
        <button
          type="button"
          onClick={() => props.setConfirmRide(false)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md transition"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ConfirmRidePopUp;
