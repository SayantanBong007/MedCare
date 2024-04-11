import React from "react";
import {UserMap2, UserMap2pie} from "../../../../../components/maps"
const StoreAnalysis = () => {
  return (
    <div className="h-full w-[85vw] flex bg-white">
      <div className="h-full w-full p-5">
      <div className=" bg-blue-50 h-full rounded-lg p-14 pl-2 shadow-lg overflow-auto">
    
        <div className="flex flex-col mt-5 pl-2">
          <div className="text-3xl font-semibold ">Name Of Medicine</div>
          <div className="flex flex-row gap-10">
            <div className="text-xl  pt-5 ">
              Count:
              <span className="text-blue-500 pl-3 font-normal ">10</span>
            </div>
            <div className="text-xl  pt-5 ">
             Price:
              <span className="text-blue-500 pl-3 font-normal ">200</span>
            </div>
          </div>
          <div className="flex flex-row w-full pt-5 pb-7 mt-5 justify-evenly items-center mb-10 bg-white">
            <div className="h-[6rem] w-[10rem] bg-blue-300 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> 4567</h1>
                <h4>In stock</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-300 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> 434</h1>
                <h4>Total Orders</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-300 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> 11 </h1>
                <h4>Present Orders</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-300 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> $2344</h1>
                <h4>Total Earnings</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center  items-center h-full mt-[2rem]">    
            <div className=" w-full h-full p-[1.5rem] flex flex-row">
              <UserMap2 />
              <UserMap2pie/>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default StoreAnalysis;