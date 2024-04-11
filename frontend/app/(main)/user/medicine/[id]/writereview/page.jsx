import React from 'react'

const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-blue-100  flex items-center justify-center'>
        <div className='h-max w-[43rem] p-[2rem] bg-white rounded-xl text-black'>
            <h1 className='text-[3rem] font-bold ml-[6rem]'>Write your review</h1>
            <div className='mt-[3rem]'>
            <h4 className='text-2xl font-semibold ml-[16rem]'>Rating:-</h4>
            <input className='h-[3rem] w-[27rem] border-2 border-black rounded-md ml-[6rem] mt-[0.5rem]' defaultValue={3} min={1} max={5} type="number" />
            <h4 className='text-2xl font-semibold ml-[16rem] mt-[2rem] '>Review:-</h4>
            <input className='h-[3rem] w-[27rem] border-2 border-black rounded-md ml-[6rem] mt-[0.5rem]' type="text" />
            </div>
            <button className='w-[9rem] h-[3rem] ml-[14rem] mt-[3rem] text-white bg-[#0360D9] text-xl rounded-md'>Submit</button>

        </div>

    </div>
  )
}

export default page
