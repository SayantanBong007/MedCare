import React from "react";
import { UserMap, UserMap1 } from "./maps";

const StoreAnalysis = () => {
  return (
    <div className="h-[75vh] w-full flex ">
      <div className="h-full w-full mt-8 bg-blue-50 rounded-lg pl-2 shadow-lg">
        <div className="flex flex-col mt-5 pl-2">
          <div className="text-3xl font-semibold ">Name Of Store</div>
          <div className="flex flex-row gap-10">
            <div className="text-xl  pt-5 ">
              Location:
              <span className="text-blue-500 pl-3 font-normal ">asdasdasd</span>
            </div>
            <div className="text-xl  pt-5 ">
              Manager:
              <span className="text-blue-500 pl-3 font-normal ">asdasdasd</span>
            </div>
          </div>
          <div className="flex flex-row w-full pt-5 mt-5 justify-evenly items-center mb-10 ">
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> OrdersNo</h1>
                <h4>No of orders</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> CurOrdNo</h1>
                <h4>Current Orders</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> ProNo</h1>
                <h4>Products</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> worNo</h1>
                <h4>Workers</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2">Rating</h1>
                <h4>Rating</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> 15085</h1>
                <h4>Total Earning</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-full ">
            <div className="flex flex-col justify-start mb-5">
              <div className="flex flex-row  bg-blue-200 w-[50rem] h-10 rounded-lg">
                <div className="flex flex-row justify-around w-full items-center">
                  <h1>Name</h1>
                  <h1>Post</h1>
                  <h1>Experience</h1>
                  <h1>Sallary</h1>
                </div>
              </div>
              <div className="mt-5 ">
                <div className="flex flex-row justify-around w-full items-center">
                  <h1>Name</h1>
                  <h1>Post</h1>
                  <h1>Experience</h1>
                  <h1>Sallary</h1>
                </div>
              </div>
            </div>
            <div className=" w-[40rem] h-[30rem] p-[1.5rem]">
              <UserMap1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreAnalysis;
