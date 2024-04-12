import React from "react";
import Link from "next/link";
import { getStore } from "../actions/store/storeController";

const StoreDetailsCard = ({ id, name, owner, rating, workers, orders }) => {
  return (
    <div className='flex justify-between w-full font-["Nunito Sans"] border-2 border-[#0360D9] h-[8rem] bg-[#FFFFFF] text-[#000000] p-[2rem] items-center rounded-lg hover:shadow-lg'>
      <div className="flex flex-col">
        <h1 className="text-[2rem]">{name}</h1>

        <h4 className="text-[1rem]">
          Manager: <span className="text-blue-500">{owner}</span>
        </h4>
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
