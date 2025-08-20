import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [RiderPopup, setRiderPopup] = useState(true);
  const RiderPopupRef = useRef(null)
  const [ConfirmRide, setConfirmRide] = useState(false);
  const ConfirmRiderRef = useRef(null);

  useEffect(()=>{
    if(RiderPopup){
      gsap.to(RiderPopupRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(RiderPopupRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[RiderPopup]);

  useEffect(()=>{
    if(ConfirmRide){
      gsap.to(ConfirmRiderRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(ConfirmRiderRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[ConfirmRide]);

  return (
    <div className="h-screen overflow-hidden  ">
    <div>
      <img className=' fixed h-16 w-18 p-2 rounded-2xl   ' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
    <Link to='/captain-login' className=" fixed w-7 h-7 rounded-full bg-white  flex items-center justify-center right-2 top-2 shadow-lg cursor-pointer">
    <i className="text-lg font-semibold ri-logout-box-r-line"></i>
    </Link>
    </div>
  <div className="h-3/5">

    <img className=" h-full w-full object-cover "
      src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
      alt=""
    />
  </div>
    <div>
      <CaptainDetails/>
    </div>
    <div ref={RiderPopupRef} className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-4  py-3  ">
           <RidePopUp setRidepopUp={setRiderPopup} setConfirmRide={setConfirmRide} />
      </div> 
      <div ref={ConfirmRiderRef} className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-4  py-3  ">
           <ConfirmRidePopUp setConfirmRide={setConfirmRide}  setRidepopUp={setRiderPopup}  />
      </div> 
</div>
  )
}

export default CaptainHome