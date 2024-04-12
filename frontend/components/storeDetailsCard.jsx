import React from "react";
import Link from "next/link";
import { getStore } from "../actions/store/storeController";

const StoreDetailsCard = ({ id, name, owner, rating, workers }) => {
  return (
    <div className='flex justify-between w-full font-["Nunito Sans"] border-2 border-[#0360D9] h-[8rem] bg-[#FFFFFF] text-[#000000] p-[2rem] items-center rounded-lg hover:shadow-lg'>
      <div className="flex flex-col">
        <h1 className="text-[2rem]">{name}</h1>
        <h4 className="text-[1rem]">
          Location <span className="text-blue-500 "></span>
        </h4>
        <h4 className="text-[1rem]">
          Manager: <span className="text-blue-500">{owner}</span>
        </h4>
      </div>
      <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-2xl mt-5 mb-2"> OrdersNo</h1>
          <h4>No of orders</h4>
        </div>
      </div>
      <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-2xl mt-5 mb-2"> {workers}</h1>
          <h4>No of workers</h4>
        </div>
      </div>
      <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-2xl mt-5 mb-2"> {rating}</h1>
          <h4>Rating</h4>
        </div>
      </div>
      <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-2xl mt-5 mb-2"> 15085</h1>
          <h4>Total Earning</h4>
        </div>
      </div>

      <Link href={`/ceo/store/${id}`}>
        <button className="h-[3rem] w-[8rem] ml-[1rem] rounded-md p-[1rem] text-[#FFFFFF] bg-[#0360D9] text-sm flex justify-center items-center">
          More details
        </button>
      </Link>
    </div>
  );
};

export default StoreDetailsCard;
