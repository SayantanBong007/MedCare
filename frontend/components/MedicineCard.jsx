import React from "react";
import Link from "next/link";
import { getMedicine } from "../actions/medicine/medicineContriller";

const MedicineCard = ({ name, desc, count, price, rating, storename, id }) => {
  // getMedicine();
  console.log(id);
  var rate = rating;
  return (
    <div className='flex justify-around w-[38rem] font-["Nunito Sans"] border-[0.2rem]  border-[#0360D9] rounded-md h-[8rem] bg-[#FFFFFF] text-[#000000] p-[2rem]'>
      <div>
        <h4 className="text-[1.5rem]">{name}</h4>
        <p className="text-[0.8rem] relative bottom-[0.5rem]">{storename}</p>
        <div className="flex relative bottom-[0.5rem]">
          {Array.from({ length: rate }).map((index) => (
            <img key={index} src="/filled.png" alt="" />
          ))}
          {Array.from({ length: 5 - rate }).map((index) => (
            <img key={index} src="/outlined.png" alt="" />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h4 className="text-[1.5rem] ml-[5rem] ">${price}</h4>
          <p className="text-[0.8rem] ml-[4rem]">
            Quantity <span className="text-[#0360D9]">x{count}</span>
          </p>
          <p className="text-[0.8rem]">
            Delivery within <span className="text-[#0360D9]">2 days</span>
          </p>
        </div>
        <Link href={`/user/medicine/${id}`}>
          <button className="h-[2rem] w-[6rem] ml-[1rem] rounded-md p-[1rem] text-[#FFFFFF] bg-[#0360D9] text-sm flex justify-center items-center">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MedicineCard;
