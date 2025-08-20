import React from 'react';

const RidePopUp = (props) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-xl p-5 flex flex-col items-center  space-y-1">

      {/* Close Icon */}
      <h5
        onClick={() => props.setRidepopUp(false)}
        className="text-gray-400 hover:text-gray-600 text-2xl  cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-800 text-center border-b border-gray-200 pb-2 w-full">
        Confirm Your Riding Partner
      </h3>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border border-gray-300 shadow-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
          alt="Rider"
        />
        <div className="mt-3 bg-amber-100 px-4 py-2 rounded-full text-center shadow-sm">
          <h3 className="font-semibold text-gray-800">Himtesh Pawar</h3>
          <p className="text-sm text-gray-600">2.4 km away</p>
        </div>
      </div>

      {/* Location Info */}
      <div className="flex items-start gap-3 w-full border-b border-gray-200 pb-3">
        <i className="text-blue-600 text-xl ri-map-pin-line"></i>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">BH531</h4>
          <p className="text-sm text-gray-600">Kajikar Coaching, Mumbai</p>
        </div>
      </div>

      {/* Fare Info */}
      <div className="flex items-start gap-3 w-full">
        <i className="text-green-600 text-xl ri-money-rupee-circle-line"></i>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">₹194.34</h4>
          <p className="text-sm text-gray-600">Cash Only</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-2 mt-3">
        <button
          onClick={() => {
            props.setRidepopUp(false);
            props.setConfirmRide(true);
          }}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={() => props.setRidepopUp(false)}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md shadow-sm transition duration-300"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
