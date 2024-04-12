"use client";

import React, { useState } from "react";
import StoreAnalysis from "../../../../../components/storeAnalysis";
import { getStoreDetails } from "../../../../../actions/store/storeController";

const page = () => {
  const [last, setLast] = useState("");
  const [store, setStore] = useState([]);
  const extractStoreDetails = async (id) => {
    const data = await getStoreDetails(id);
    setStore(data.spmed);
    // console.log(id);
    console.log(data);
  };
  return (
    <div className=" h-screen w-[85vw] flex ">
      <div className="h-full w-full p-5  ">
        <div className=" bg-blue-100 h-full rounded-lg p-14 overflow-auto">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <input
                placeholder="Search Store"
                className=" h-[3rem] w-full p-[2rem] rounded-md shadow-md text-black transition-colors duration-300 ease-in-out hover:bg-gray-100"
                type="text"
              />
              <button className="h-[4rem] w-[10rem] ml-[4rem] bg-blue-500 p-[1rem] rounded-md text-[1.4rem] flex justify-center items-center hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
                Search
              </button>
            </div>
            <StoreAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
