'use client'
import React, { useEffect, useState } from 'react'
import MedicineCard from "../../components/MedicineCard"
const page = () => {

  const [lat,setLat]=useState(0);
  const [long,setLong]=useState(0);

  useEffect(()=>{
    const successCallback = (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude)
      // console.log(position.coords.latitude);
    };
    
    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    // let map;
    // const initMap = async()=>{
    //   const {Map}= await google.maps.importLibrary("maps");

    //   map = new Map(document.getElementById("map"), {
    //     center: { lat: {lat}, lng: {long} },
    //     zoom: 8,
    //   });
    // }

    // initMap();
  },[])
  return (
    <div className="absolute left-[15vw] w-[85vw] h-[100%] bg-[#E1EEFF] pt-[5rem] pl-[3rem]">
      <div className='flex justify-around items-center'>
        <div>
          <div className='flex'>
            <img className='h-[3rem] w-[2rem]' src="/location.png" alt="" />
            <div className='text-black ml-[1rem] font-["Nunito Sans"]'>
              <h4 className='text-lg font-bold'>Home</h4>
              <p>Deliver to Lal Kuan, Ghaziabad</p>
            </div>
          </div>
          <div id='map' className='w-[19rem] h-[10rem] mt-[1rem] border-blue-500 border-2 rounded-md'>
            {/* map */}
            </div>
        </div>
        <div className='h-[15rem] w-[54rem] rounded-xl relative bg-[#0360D9] text-[#FFFFFF]'>
          <div className="font-['Nunito Sans']">
            <h1 className='font-bold text-[2rem] mt-[2rem] ml-[6rem]'>Welcome to MedCare!</h1>
            <p className='mt-[1rem] text-[1.3rem] ml-[3rem]'>A platform designed to provide information about <br /><span className='ml-[2.5rem]'>health parameters and medical benefits</span></p>
            <button className='bg-[#FFFFFF] rounded-lg text-[#000000] mt-[1rem] ml-[10rem] h-[2rem] p-[1.5rem] flex items-center justify-center'>30% Discount on 1st order</button>

          </div>
          <img className='absolute bottom-[1.5rem] left-0 h-[3rem] w-[5rem]' src="/ecg.png" alt="" />
          <img className='absolute right-[1rem] bottom-[-1.5rem] h-max w-[22rem]' src="/dashboard.png" alt="" />
          {/* image */}
        </div>
      </div>
      <div className='bottom'>
        <div className='flex items-center'>
          {/* searchbar */}
          <input placeholder='Search your medicine' className='mt-[3rem] ml-[5rem] h-[3rem] w-[54rem] p-[2rem] rounded-md shadow-md text-black' type="text" />
          <button className='h-[4rem] w-[10rem] ml-[4rem] mt-[2.5rem] bg-[#0360D9] p-[1rem] rounded-md text-[1.4rem] flex justify-center items-center '>Search</button>
        </div>
        <div className='grid grid-cols-2 grid-flow-row mt-[3rem] ml-[1rem]'>
          {/* medicine cards */}
          <MedicineCard/>
          <MedicineCard/>
        </div>
      </div>
    </div>
  )
}

export default page

