import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css"; // Import Remix Icon CSS if needed
import LoactionSerachPanel from "../components/LoactionSerachPanel";
import VehiclePanle from "../components/VehiclePanle";
import ConfirmRIde from "../components/ConfirmRIde";
import LookingForDriver from "../components/LookingForDriver";
import WaittingforDriver from "../components/WaittingforDriver";
import  {SocketContext}  from "../Context/SocketContext";
import { useContext } from "react";
import { UserDataContext } from "../Context/UserContext";
import axios from "axios";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [palenopen, setpalenopen] = useState(false);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRidePanle, setconfirmRidePanle] = useState(false);
  const [LookingDirver, setLookingDirver] = useState(false);

  const [activeField, setActiveField] = useState(null); // Track which input is active
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [fare, setfare] = useState({ car: 0, bike: 0, auto: 0 });
  const [vehicleType, setvehicleType] = useState(null)

  const confirmRideRef = useRef(null);
  const LookingDriverRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelref = useRef(null);
  const panelcloseref = useRef(null);


  const {socket} = useContext(SocketContext);
  const {user} = useContext(UserDataContext);

  useEffect(()=>{

    console.log('User info in Home component:', user);
    socket.emit('join', {usertype:'user', userid:user._id});
  },[user])

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setpickup(value);
    if (value.trim().length < 3) {
      setPickupSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/maps/get-suggestions`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Assume the backend returns a field "suggestions"
      setPickupSuggestions(response.data.suggestions || []);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    const value = e.target.value;
    setdestination(value);
    if (value.trim().length < 3) {
      setDestinationSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/maps/get-suggestions`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data.suggestions || []);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

  const submitHendler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (palenopen) {
      // Fixed logic for animation
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

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useEffect(() => {
    if (confirmRidePanle) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanle]);

  useEffect(() => {
    if (LookingDirver) {
      gsap.to(LookingDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(LookingDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [LookingDirver]);

  async function FindTrip() {
    setvehiclePanel(true);
    setpalenopen(false);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/rides/get-fare`,
        {
          params: { pickup, destination },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data?.fare) {
        setfare(response.data.fare);
      }
    } catch (error) {
      setvehiclePanel(false);
    }
  }

  async function createRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/rides/create-ride`,
        {
          pickup,
          destination,
          vehicleType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Ride created successfully:", response.data);
      setLookingDirver(true);
      setconfirmRidePanle(false);
    } catch (error) {
      console.error("Error creating ride:", error.response ? error.response.data : error.message);
      // Optionally, show an error message to the user
    }
  }

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
        <div className="bg-white h-[30%] p-6  ">
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
              onChange={handlePickupChange}
              onClick={() => {
                setpalenopen(true);
                setActiveField("pickup");
              }}
              className="bg-[#eee] px-10 py-2 w-full mt-4 rounded-lg"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={handleDestinationChange}
              onClick={() => {
                setpalenopen(true);
                setActiveField("destination");
              }}
              className="bg-[#eee] px-10 py-2 w-full mt-3 rounded-lg"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button
            onClick={() => {
              FindTrip();
            }}
            className="bg-black text-white px-6 py-2 rounded-lg mt-4 w-full "
          >
            Show Trip
          </button>
        </div>
        <div ref={panelref} className="bg-white ">
          <LoactionSerachPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setpalenopen={setpalenopen}
            setvehiclePanel={setvehiclePanel}
            setpickup={setpickup}
            setdestination={setdestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full"
      >
        <VehiclePanle
          setconfirmRidePanle={setconfirmRidePanle}
          setvehiclePanel={setvehiclePanel}
          fare={fare} // Make sure fare object has car, bike, and auto properties
          setvehicleType={setvehicleType}
        />
      </div>
      <div
        ref={confirmRideRef}
        className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full"
      >
        <ConfirmRIde
          setLookingDirver={setLookingDirver}
          setconfirmRidePanle={setconfirmRidePanle}
          createRide={createRide}
          vehicleType={vehicleType}

          pickup={pickup}
          destination={destination}
          fare={fare}
        />
      </div>
      <div
        ref={LookingDriverRef}
        className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full"
      >
        <LookingForDriver setLookingDirver={setLookingDirver} 
        vehicleType={vehicleType}
        pickup={pickup}
        destination={destination}
        fare={fare}
        />
      </div>
      <div className=" fixed w-full z-10 bottom-0 bg-white px-4 py-9 translate-y-full ">
        <WaittingforDriver setLookingDirver={setLookingDirver} />
      </div>
    </div>
  );
};

export default Home;
