import React, { useEffect, useState } from "react";
import { UserMap, UserMap1 } from "./maps";
import { getWorker } from "../actions/store/storeController";

const StoreAnalysis = ({ workers, rating, name, manager, stock, orders }) => {
  // getWorker(name);

  const [worker, setWorker] = useState();

  useEffect(() => {
    if (name) {
      const extractWorkerDetails = async (name) => {
        try {
          const data = await getWorker(name);
          setWorker(data.worker);
          // console.log(id);
          console.log(data.worker);
        } catch (error) {
          console.error("Error fetching store details:", error);
        }
      };
      extractWorkerDetails(name);
    }
  }, [name]);

  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    console.log(worker);
    if (worker) {
      try {
        const filteredWorkers = worker.filter((item) => {
          return item.storename.toLowerCase().includes(name.toLowerCase());
        });
        setFilteredWorkers(filteredWorkers); // Update filteredOrder state
      } catch (error) {
        console.error("Error filtering orders:", error);
      }
    }
  }, [worker]);

  console.log(filteredWorkers);

  return (
    <div className="h-[75vh] w-full flex ">
      <div className="h-full w-full mt-8 bg-blue-50 rounded-lg pl-2 shadow-lg">
        <div className="flex flex-col mt-5 pl-2">
          <div className="text-3xl font-semibold ">{name}</div>
          <div className="flex flex-row gap-10">
            <div className="text-xl  pt-5 ">
              Location:
              <span className="text-blue-500 pl-3 font-normal ">asdasdasd</span>
            </div>
            <div className="text-xl  pt-5 ">
              Manager:
              <span className="text-blue-500 pl-3 font-normal ">{manager}</span>
            </div>
          </div>
          <div className="flex flex-row w-full pt-5 mt-5 justify-evenly items-center mb-10 ">
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2"> {orders}</h1>
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
                <h1 className="text-2xl mt-5 mb-2"> {stock}</h1>
                <h4>Products</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2">
                  {" "}
                  {filteredWorkers.length}
                </h1>
                <h4>Workers</h4>
              </div>
            </div>
            <div className="h-[6rem] w-[10rem] bg-blue-200 rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mt-5 mb-2">{rating}</h1>
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
                </div>
              </div>
              {filteredWorkers.length > 0 &&
                filteredWorkers.map((worker, index) => (
                  <div className="mt-5" key={index}>
                    <div className="flex flex-row justify-around w-full items-center">
                      <h1>{worker.workername}</h1>
                      <h1>{worker.post}</h1>
                      <h1>{worker.experience}</h1>
                    </div>
                  </div>
                ))}
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
