import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-3">
      
      {/* Close Button */}
      <h5
        onClick={() => {
          props.setfinalcall(false);
        }}
        className="text-gray-500 hover:text-gray-700 text-2xl  cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 w-full text-center">
        Complete Ride
      </h3>

      {/* User Info */}
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
          alt="User"
        />
        <div className="mt-3 bg-gray-100 px-4 py-2 rounded-full text-center shadow-sm">
          <h3 className="font-semibold text-gray-700">Himtesh Pawar</h3>
          <p className="text-sm text-gray-500">2.4 km</p>
        </div>
      </div>

      {/* Pickup Info */}
      <div className="flex items-start gap-3 w-full border-b border-gray-200 pb-3">
        <i className="text-xl text-blue-600 ri-map-pin-line"></i>
        <div>
          <h4 className="font-semibold text-lg text-gray-800">BH531</h4>
          <p className="text-sm text-gray-600">Kajikar Coaching, Mumbai</p>
        </div>
      </div>

      {/* Fare Info */}
      <div className="flex items-start gap-3 w-full">
        <i className="text-xl text-green-600 ri-money-rupee-circle-line"></i>
        <div>
          <h4 className="font-semibold text-lg text-gray-800">₹194.34</h4>
          <p className="text-sm text-gray-600">Cash Only</p>
        </div>
      </div>

      {/* Confirm Button */}
      <Link
        to="/Captain-riding"
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md text-center shadow-sm transition duration-300"
      >
        Confirm Ride
      </Link>
    </div>
  );
};

export default FinishRide;
