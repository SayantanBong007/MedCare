import React from "react";

export const PreviousCard = ({ order }) => {
  return (
    <div className='flex justify-between w-[90%] font-["Nunito Sans"] border-2 border-[#0360D9] h-[8rem] bg-[#FFFFFF] text-[#000000] p-[2rem] items-center rounded-lg hover:shadow-lg'>
      <div className="flex flex-col">
        <h1 className="text-[2rem]">{order.name}</h1>
        <h4 className="text-[1rem]">
          Delivered to <span className="text-blue-500 "></span>
        </h4>
        <h4 className="text-[1rem]">
          Delivered on <span className="text-blue-500"></span>
        </h4>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col flex-end ">
          <h4 className="text-[2rem] relative left-[8rem] ">${order.price}</h4>
          <p className="text-[1rem] ml-[4rem]">
            Oreder Quantity{" "}
            <span className="text-[#0360D9]">x{order.count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const CurrentCard = ({ order }) => {
  return (
    <div className='flex justify-between w-[90%] font-["Nunito Sans"] border-2 border-[#0360D9] h-[8rem] bg-[#FFFFFF] text-[#000000] p-[2rem] items-center rounded-lg hover:shadow-lg'>
      <div className="flex flex-col">
        <h1 className="text-[2rem]">{order.name}</h1>
        <h4 className="text-[1rem]">
          Delivered to <span className="text-blue-500 "></span>
        </h4>
        <h4 className="text-[1rem]">
          Delivery within <span className="text-blue-500"></span>
        </h4>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col flex-end ">
          <h4 className="text-[2rem] relative left-[8rem] ">${order.price}</h4>
          <p className="text-[1rem] ml-[4rem]">
            Oreder Quantity{" "}
            <span className="text-[#0360D9]">x{order.count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
