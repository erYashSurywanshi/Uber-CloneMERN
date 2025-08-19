import React from 'react'


const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setLookingDirver(false);
        }}
        className=" absolute left-37 top-0 text-amber-200  text-2xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-lg font-semibold border-b-3 border-purple-300 ">Looking your Rider</h3>

      <div className="flex flex-col mt-5  items-center justify-between px-1 py-1 cursor-pointer ">
      <img className="h-24 drop-shadow-[0px_10px_20px_rgba(0,0,255,0.5)]"
     src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
     alt="UberX car"/>
      </div>
      <div className="flex items-center gap-3 w-full border-b-2 border-gray-300 p-2">
      <i className=" text-lg ri-map-pin-line"></i>
        <div> 
          <h3 className="font-semibold text-xl">BH531</h3>
          <p>kajikar cocehing , Mumbai</p>
         </div>
      </div>
      <div className="flex items-center gap-3 w-full border-b-2 border-gray-300 p-2">
      <i className=" text-lg ri-info-card-fill"></i>
        <div> 
          <h3 className="font-semibold text-xl">Car</h3>
          <p>Maruti Suzuki Swift </p>
         </div>
      </div>
      <div className="flex items-center gap-3 w-full  p-2">
      < i className="text-lg ri-money-rupee-circle-line"></i>
        <div> 
          <h3 className="font-semibold text-xl">$194.34</h3>
          <p>Cash Only</p>
         </div>
      </div>

    </div>
  )
}

export default LookingForDriver