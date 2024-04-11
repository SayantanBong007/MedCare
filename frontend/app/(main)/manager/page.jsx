"use client"
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
const Page = () => {
  // const [data,setData]=useState([]) 
  //    useEffect(()=>{
  //       axios.get("")
  //       . then(res=>setData(res.data))
  //       .catch((error)=>{
  //         console.log(error)
  //       })
  //    },[])
   const data=[{
    name:"Emman Watson" ,
    medice:"Paracetamol" ,
    rating :"5 star" ,
    quantity:"100"
   },
   {
    name:"Emman Watson" ,
    medice:"Paracetamol" ,
    rating :"5 star" ,
    quantity:"100"
   }]
  const newdata = data.map((item) => (
    <div className='flex  w-[90%] font-["Nunito Sans"] justify-between border-2 border-[#0360D9] h-[12rem] bg-[#FFFFFF] text-[#000000] p-[2rem] mb-3 mt-3 '>
      <div className="flex">
      <div className="mr-14">
      <Image className="object-cover overflow-hidden  m-2 rounded-xl"
         src={item.image}
         alt="Doctor Image"
          width={120}
          height={30}/>
      </div>
    <div className="flex flex-col">
    <h4 className="text-[1.3rem] mb-2">{item.name}</h4>
      <p className="text-[0.8rem] mb-2">Delivered to <span className="text-blue-500">{item.location} </span></p>
      <h4 className="text-[1.3rem]">{item.medice}</h4>
      <h4 className="text-[1.3rem]">{item.rating}</h4>
    </div>
      </div>
    <div className="flex items-center ">
      <div >
        <h4 className="text-[1.5rem] ml-[5rem] ">$44</h4>
        <p className="text-[2rem] ml-[4rem]">
          {item.quantity} <span className="text-[#0360D9]">x1</span>
        </p>
      </div>
    </div>
  </div>
  ));

  return (
    <div className="h-full w-full bg-blue-200 flex  flex-col pl-20" >
     {newdata}
       </div>
  );
};

export default Page;
