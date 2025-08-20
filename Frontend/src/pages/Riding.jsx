import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen overflow-hidden  ">
        <Link to='/home' className=" fixed w-7 h-7 rounded-full bg-white  flex items-center justify-center right-2 top-2 shadow-lg cursor-pointer">
        <i className="text-lg font-semibold ri-home-9-line"></i>
        </Link>
      <div className="h-1/2">
 
        <img className=" h-full w-full object-cover "
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>

      <div>
        <div className="flex items-center justify-between flex-row-reverse mb-5 mt-3">
          <div className=" flex flex-col items-end p-1">
            <h5 className="text-[13px] font-semibold"> Himtash Pawar</h5>
            <h2 className=" font-bold "> MP04 BH5334</h2>
            <h4 className=" text-sm">
              <b>Car -</b> MS Swift
            </h4>
          </div>

          <div className="flex flex-col mt-5 ml-4  items-center justify-between px-1 py-1 cursor-pointer ">
            <img
              className="h-12"
              src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
              alt="UberX car"
            />
            <img
              className="w-14 h-13 absolute mr-12 rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPzLVxq8WlBGZAf34OFPazsc5atyoQaUACw&s"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full border-b-2 border-gray-300 p-2">
          <i className=" text-lg ri-map-pin-line"></i>
          <div>
            <h3 className="font-semibold text-xl">BH531</h3>
            <p>kajikar cocehing , Mumbai</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full  p-2">
    < i className="text-lg ri-money-rupee-circle-line"></i>
      <div> 
        <h3 className="font-semibold text-xl">$194.34</h3>
        <p>Cash Only</p>
       </div>
    </div>
    <button className="w-full p-2 font-semibold bg-green-600 my-3  rounded-[7px]">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
