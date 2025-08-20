import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "./FinishRide";
import gsap from "gsap";

const ConfirmRiding = () => {

    const [finalcall, setfinalcall] = useState(false)
    const finalcallRef = useRef(null);

  useEffect(() => {
    if (finalcall) {
      gsap.to(finalcallRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finalcallRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finalcall]);

  return (
    <div className="h-screen overflow-hidden  ">
      <div>
        <img
          className=" fixed h-16 w-18 p-2 rounded-2xl   "
          src="https://pngimg.com/uploads/uber/uber_PNG24.png"
          alt=""
        />
        <Link
          to="/home"
          className=" fixed w-7 h-7 rounded-full bg-white  flex items-center justify-center right-2 top-2 shadow-lg cursor-pointer"
        >
          <i className="text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className=" h-full w-full object-cover "
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div className=" h-1/5 bg-yellow-400  flex items-center justify-between p-6"
    
          onClick={() => {
            setfinalcall(true);
          }}>
        <h5 className=" text-black-200 fixed left-[47%] top-[80%] text-2xl">
          <i className="ri-arrow-up-wide-line "></i>
        </h5>
        <h4 className="tex-lg font-bold">4 KM Away</h4>
        <button className=" px-7 py-3 font-semibold bg-green-600 text-white  rounded-lg">
          {" "}
          Complete Ride{" "}
        </button>
      </div>
      <div ref={finalcallRef} className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-4  py-3  ">
            <FinishRide  setfinalcall={setfinalcall}/>
      </div> 
    </div>
  );
};

export default ConfirmRiding;
