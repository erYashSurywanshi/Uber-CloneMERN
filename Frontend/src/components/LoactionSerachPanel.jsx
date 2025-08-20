import React from "react";

const LocationSerachPanel = ({
  suggestions,
  setvehiclePanel,
  setpalenopen,
  setpickup,
  setdestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setpickup(suggestion.name);
    } else if (activeField === "destination") {
      setdestination(suggestion.name);
    }
    // setvehiclePanel(true);
    // setpalenopen(false);
  };

  return (
    <div>
      {suggestions &&
        suggestions.map((elem, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleSuggestionClick(elem)}
              className="flex items-center mb-2 mx-3 border border-gray-300 hover:border-blue-500 rounded-lg shadow-sm justify-start gap-5 p-3 cursor-pointer transition-all duration-200 ease-in-out"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                <i className="ri-map-pin-fill text-lg"></i>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium text-gray-800 text-sm">
                  {elem.name}
                </h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LocationSerachPanel;
