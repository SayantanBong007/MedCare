"use client";

import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const data = {
    name: "Paracetamol",
    rating: 3,
    In_stock: "458",
    total_orders: "56",
    present_orders: "56",
    total_earnings: "1023",
  };
  return (
    <div className="  h-screen w-[85vw] flex overflow-auto">
      <div className="p-5 h-full w-1/5 overflow-hidden ">
        <div className="h-full  rounded-lg gap-10">
          <h4 className="text-3xl font-bold flex justify-center items-center pt-10">
            Profile
          </h4>

          <div className="flex flex-col justify-center items-center p-2 pt-10">
            <img
              className="h-50 w-50 bg-green-400 m-5 rounded-md"
              src="/y.png"
              alt="user photo"
            />
            <h5 className="text-2xl font-bold m-5 pt-10">User Details</h5>
          </div>

          <div className="flex justify-start pl-3 flex-col flex-1 gap-8">
            <div className="pt-3">
              <div className="text-sm">Name:</div>
              <div className="font-bold text-xl pt-2">Saynatan Gain</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Contact Number:</div>
              <div className="font-bold text-xl pt-2">8100523350</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Email Id:</div>
              <div className="font-bold text-xl pt-2">
                Sayantangainh632@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-4/5 p-5 pl-2 ">
        <div className=" bg-blue-100 h-full rounded-lg p-14 flex flex-col items-center justify-cente">
          <div className="flex flex-row justify-between  bg-white  rounded-lg w-full pt-3 pl-2 pr-2">
            <div className="w-1/3 p-4 pt-6">
              <h3 className="text-2xl">{data.name}</h3>
              <div className="flex flex-row mt-2 mb-2">
                {Array.from({ length: data.rating }, (_, index) => (
                  <React.Fragment key={index}>
                    <img src="/filled.png" alt="filled star" />
                  </React.Fragment>
                ))}
                {Array.from({ length: 5 - data.rating }, (_, index) => (
                  <React.Fragment key={index}>
                    <img src="/outlined.png" alt="filled star" />
                  </React.Fragment>
                ))}
              </div>
              <Link href="/manager/details/id">
                <button className="bg-blue-700 h-19 text-white rounded-lg p-2 ">
                  Product Analytics
                </button>
              </Link>
            </div>
            <div className="flex flex-row gap-4 mt-4 w-2/3 justify-around">
              <div className="flex flex-col bg-blue-200 h-[6rem] w-[10rem] p-[2rem]  mb-8 rounded-lg justify-center items-centre">
                <h4 className="font-bold">{data.In_stock}</h4>
                <p>In Stock</p>
              </div>
              <div className="flex flex-col bg-blue-200   h-[6rem] w-[10rem] p-[2rem]  mb-8 rounded-lg justify-center items-centre">
                <h4 className="font-bold">{data.total_orders}</h4>
                <p>Total Orderes</p>
              </div>
              <div className="flex flex-col bg-blue-200  h-[6rem] w-[10rem] p-[2rem]  mb-8 rounded-lg justify-center items-centre">
                <h4 className="font-bold">{data.present_orders}</h4>
                <p>Present Orders</p>
              </div>
              <div className="flex flex-col bg-blue-200  h-[6rem] w-[10rem] p-[2rem]  mb-8 rounded-lg justify-center items-centre">
                <h4 className="font-bold">{data.total_earnings}</h4>
                <p>Total Earning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
