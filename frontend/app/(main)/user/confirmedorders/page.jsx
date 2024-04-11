import React from 'react'
import { CircleCheck } from 'lucide-react';


const page = () => {
  return (
    <div className='w-[100vw] bg-white text-black h-[100vh] flex flex-col items-center'>
      <div className='flex flex-col h-1/2 w-2/3'>
          <div className='flex flex-row gap-5 '>
            <div>
            <CircleCheck size={48}  color='green' />
            </div>
            <div>
              <h3>Order  #1004</h3>
              <h1 className='text-xl font-bold'>Thank You Alex !</h1>
            </div>
          </div>
          <div className='border-2 pl-3'>
            <div>Map</div>
            <h1>Your Order is confirmed</h1>
             <p className='mb-3'>We have Accepted Your ,Order and wer gettin it ready come back to this page for updates </p>
             <button  className='h-[2.4rem] w-[14rem] bg-white border-2 '> <span className='text-blue-600'>Track Orderd</span>  <span className='text-blue-400'>with shop</span></button>
             <div className='border-t-2 mt-3'>
             <div>Other Tracking number:</div>
             <h1 className='text-blue-600'>123221132132</h1>
             </div>
          </div>
          <div className='flex flex-row mt-12  gap-16 border-2 w-[50%] pl-3'>
            <div className='flex flex-col '>
           <h1 className='mb-2'>Customer Information</h1>
           <p className='mb-6'>email</p>
           <h1 className='font-bold'>Shipping address:</h1>
           </div>
           <div className='flex flex-col'>
            <p className='mb-5'>billing addresss</p>
            <p>address is here </p>

           </div>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default page
