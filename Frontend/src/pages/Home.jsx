import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css"; // Import Remix Icon CSS if needed
import LoactionSerachPanel from "../components/LoactionSerachPanel";
import VehiclePanle from "../components/vehiclePanle";
import ConfirmRIde from "../components/ConfirmRIde";
import LookingForDriver from "../components/LookingForDriver";
import WaittingforDriver from "../components/WaittingforDriver";


const Home = () => {
  const [pickup, setpickup] = useState("second");
  const [destination, setdestination] = useState("");
  const [palenopen, setpalenopen] = useState(false);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRidePanle, setconfirmRidePanle] = useState(false)
  const [LookingDirver, setLookingDirver] = useState(false)

  const confirmRideRef = useRef(null);
  const LookingDriverRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelref = useRef(null);
  const panelcloseref = useRef(null);

  const submitHendler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (palenopen) { // Fixed logic for animation
      gsap.to(panelref.current, {
        height: "70%",
        duration: 0.5, // Animation duration
        ease: "power2.out", // Smooth easing
      });
      gsap.to(panelcloseref.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelref.current, {
        height: "0%",
        duration: 0.5, // Animation duration
        ease: "power2.in", // Smooth easing
      });
      gsap.to(panelcloseref.current, {
        opacity: 0,
      });
    }
  }, [palenopen]); // Trigger animation when palenopen changes

  useEffect(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePanel]);

  useEffect(()=>{
    if(confirmRidePanle){
      gsap.to(confirmRideRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(confirmRideRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidePanle]);

  useEffect(()=>{
    if(LookingDirver){
      gsap.to(LookingDriverRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(LookingDriverRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[LookingDirver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-17 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div className="h-screen top-0 flex flex-col justify-end w-full absolute">
        <div className="bg-white h-[30%] p-5">
          <h5
            ref={panelcloseref}
            onClick={() => {
              setpalenopen(false);
            }}
            className=" absolute right-5 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line "></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHendler(e);
            }}
          >
            {/* this is the line style */}
            <div className="relative">
              <div className="w-[10px] h-[10px] rounded-full bg-black z-3 absolute left-4 mt-6"></div>
              <div className="line absolute bg-gray-500 h-16 w-[4px] mt-7.5 ml-[19px] rounded-full"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-black absolute left-4 mt-[5.5rem]"></div>
            </div>

            <input
              value={pickup}
              onChange={(e) => {
                setpickup(e.target.value);
              }}
              onClick={() => {
                setpalenopen(true);
              }}
              className="bg-[#eee] px-10 py-2 w-full mt-4 rounded-lg"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value);
              }}
              onClick={() => {
                setpalenopen(true);
              }}
              className="bg-[#eee] px-10 py-2 w-full mt-3 rounded-lg"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelref} className="bg-white  h-[0]">
          <LoactionSerachPanel setpalenopen={setpalenopen} setvehiclePanel={setvehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full">
       <VehiclePanle setconfirmRidePanle={setconfirmRidePanle} setvehiclePanel={setvehiclePanel} />
      </div> 
      <div ref={confirmRideRef} className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full">
              <ConfirmRIde setLookingDirver={setLookingDirver}  setconfirmRidePanle={setconfirmRidePanle}/>
      </div> 
      <div ref={LookingDriverRef} className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full">
            <LookingForDriver setLookingDirver={setLookingDirver}/>
      </div> 
      <div  className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 ">
            <WaittingforDriver setLookingDirver={setLookingDirver}/>
      </div> 
    </div>
  );
};

export default Home;
