import React from 'react'
import loginIcon from "../../../public/cuate.png"

const page = () => {
  // console.log(loginIcon)
  return (
    <div className='bg-[#E1EEFF] w-[100vw] h-[100vh] flex justify-center'>
      <div className='w-[70%] p-[2rem]'>
        <div className='flex items-center justify-between w-[6rem]'>
          <img className='w-[1rem] h-[1rem]' src="/Vector.png" alt="" />
          <h2 className="text-[#0360D9] font-semibold font-['Nunito_Sans']" >MedCare</h2>
        </div>
        <div className='mt-[10rem] w-full h-[12rem] flex justify-around'>
          <div>
            <div className='p-[1rem] w-[12rem] h-full border-2 border-[#0360D9] flex justify-center items-center'>
              <img className='w-full h-full' src="/cuate.png" alt="" />
               
            </div>
            <button className="mt-[2rem] rounded-md w-[12rem] flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">User Login</button>
          </div>
          <div>
            <div className='p-[1rem] w-[12rem] h-full border-2 border-[#0360D9] flex justify-center items-center'>
              <img className='w-full h-full' src="/doctor.png" alt="" />
               
            </div>
            <button className="mt-[2rem] rounded-md w-[12rem] flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">Manager Login</button>
          </div>
          <div>
            <div className='p-[1rem] w-[12rem] h-full border-2 border-[#0360D9] flex justify-center items-center'>
              <img className='w-full h-full' src="/Character.png" alt="" />
               
            </div>
            <button className="mt-[2rem] rounded-md w-[12rem] flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">Ceo Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page

