import React from 'react'

const WaittingforDriver = () => {
  return (
    <div>
    <h5
      onClick={() => {
       
      }}
      className=" absolute left-37 top-0 text-amber-200  text-2xl cursor-pointer"
    >
      <i className="ri-arrow-down-wide-line "></i>

    </h5>
    <h3 className="text-lg font-semibold border-b-3 border-gray-100 "> Your Rider</h3>

      <div className='flex items-center justify-between flex-row-reverse mb-7 mt-3'>
      <div className=" flex flex-col items-end gap-1">
        <h5 className='text-[13px]'> Himtash Pawar</h5>
        <h2 className=' font-semibold '> MP04 BH5334</h2>
        <h4> <b>Car</b>  MS Swift</h4>
      </div>
     
    <div className="flex flex-col mt-5  items-center justify-between px-1 py-1 cursor-pointer ">
    <img className="h-12"
   src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
   alt="UberX car"/>
   <img className='w-14 h-13 absolute top-23 left-3 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPzLVxq8WlBGZAf34OFPazsc5atyoQaUACw&s" alt="" />
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

  </div>
  )
}

export default WaittingforDriver