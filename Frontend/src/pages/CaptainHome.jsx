import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../Context/SocketContext";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainHome = () => {
  const [RiderPopup, setRiderPopup] = useState(true);
  const RiderPopupRef = useRef(null);
  const [ConfirmRide, setConfirmRide] = useState(false);
  const ConfirmRiderRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", {
      usertype: "captain",
      userid: captain._id,
    });
  
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude;
  
          console.log("📍 Sending location to backend:", {
            userId: captain._id,
            location: {
              type: "Point",
              coordinates: [lng, lat], // ✅ GeoJSON format
            },
          });
  
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              type: "Point",
              coordinates: [lng, lat],
            },
          });
        });
      }
    };
  
    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
  
    return () => {
      clearInterval(locationInterval);
    };
  }, [captain, socket]);
  

  socket.on("new-ride", (data) => {
    console.log("New ride request received:", data);
   
  })

  useEffect(() => {
    if (RiderPopup) {
      gsap.to(RiderPopupRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(RiderPopupRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [RiderPopup]);

  useEffect(() => {
    if (ConfirmRide) {
      gsap.to(ConfirmRiderRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ConfirmRiderRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ConfirmRide]);

  return (
    <div className="h-screen overflow-hidden  ">
      <div>
        <img
          className=" fixed h-16 w-18 p-2 rounded-2xl   "
          src="https://pngimg.com/uploads/uber/uber_PNG24.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className=" fixed w-7 h-7 rounded-full bg-white  flex items-center justify-center right-2 top-2 shadow-lg cursor-pointer"
        >
          <i className="text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className=" h-full w-full object-cover "
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div>
        <CaptainDetails />
      </div>
      <div
        ref={RiderPopupRef}
        className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-4  py-3  "
      >
        <RidePopUp
          setRidepopUp={setRiderPopup}
          setConfirmRide={setConfirmRide}
        />
      </div>
      <div
        ref={ConfirmRiderRef}
        className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-4  py-3  "
      >
        <ConfirmRidePopUp
          setConfirmRide={setConfirmRide}
          setRidepopUp={setRiderPopup}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
