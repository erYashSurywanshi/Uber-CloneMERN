import React from "react";

const VehiclePanle = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvehiclePanel(false);
        }}
        className=" absolute left-37 top-0 text-amber-200  text-2xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-lg font-semibold">Select your Vehicle</h3>
      <div onClick={()=>{
        props.setconfirmRidePanle(true)
        props.setvehiclePanel(false)
      }} className="flex w-full bg-gray-50 mt-5 rounded-xl items-center justify-between px-1 py-1 cursor-pointer active:border-3 active:border-black">
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>
      <div onClick={()=>{
        props.setconfirmRidePanle(true)
        props.setvehiclePanel(false)
      }} className="flex w-full bg-gray-50 mt-2 rounded-xl items-center justify-between px-1 py-1 cursor-pointer active:border-3 active:border-black">
        <img
          className="h-10 mx-4"
          src="https://www.freeiconspng.com/uploads/motorcycle-png-8.png"
          alt=""
        />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$93.10</h2>
      </div>
      <div onClick={()=>{
        props.setconfirmRidePanle(true)
        props.setvehiclePanel(false)

      }} className="flex w-full bg-gray-50 mt-2 rounded-xl items-center justify-between px-1 py-1 cursor-pointer active:border-3 active:border-black">
        <img
          className="h-10 mx-4"
          src="https://img.pikbest.com/png-images/20250110/auto-rickshaw-transparent-image_11366664.png!w700wp"
          alt=""
        />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">10 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$140.50</h2>
      </div>
    </div>
  );
};

export default VehiclePanle;
