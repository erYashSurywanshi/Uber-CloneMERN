import React from 'react'
import { useContext } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)

  return (
    <div>
        
    <div className=' flex items-center justify-between p-5'>
    <div className='flex items-center gap-2'>
    <img
          className="w-10 h-10  rounded-full  object-cover "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPzLVxq8WlBGZAf34OFPazsc5atyoQaUACw&s"
          alt=""
        />
      <h3 className='font-semibold capitalize' >{captain.fullname.firstname+ " " + captain.fullname.lastname}</h3>
    </div>
      <div>
        <h3 className='mt-3 font-bold'>₹194.33</h3>
        <p  className='text-sm text-gray-600'>Earned</p>
      </div>
    </div>

    <div className=' flex items-start justify-between mx-4 rounded-xl p-4 mt-3 bg-gray-100 '>
      <div className='text-center'>
      <i className="text-2xl font-semibold ri-time-line"></i>
      <h3 className='font-semibold '>10.3</h3>
      <p className='font-normal text-[12px]'> Hours Online</p>
      </div>
      <div className='text-center'>
      <i className="text-2xl font-semibold ri-speed-up-line"></i>
      <h3 className='font-semibold '>10.3</h3>
      <p className='font-normal text-[12px]'> Hours Online</p>
      </div>
      <div className='text-center'>
      <i className="text-2xl font-semibold ri-booklet-line"></i>
      <h3 className='font-semibold '>10.3</h3>
      <p className='font-normal text-[12px]'> Hours Online</p>
      </div>
    </div>
    
    </div>
    
  )
}

export default CaptainDetails