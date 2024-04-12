"use client";

import React, { useEffect, useState } from "react";
import {
  ProductMap,
  ProfitMap,
  StoreMap,
  UserMap,
} from "../../../components/maps";
import StoreDetailsCard from "../../../components/storeDetailsCard";
import { getStore } from "../../../actions/store/storeController";

const page = () => {
  const [store, setStore] = useState([]);

  const extractdata = async () => {
    const result = await getStore();
    setStore(result.store);
  };
  useEffect(() => {
    extractdata();
    console.log(store);
  }, []);

  return (
    <div className=" h-screen w-[85vw] flex overflow-auto">
      <div className="h-full w-full p-5  ">
        <div className=" bg-blue-100 h-full rounded-lg p-14 overflow-auto">
          <div className="grid grid-cols-3 gap-5 ">
            <UserMap />
            <StoreMap />
            <ProfitMap />
          </div>
          <div className="flex flex-col h-[30rem] gap-10 pt-5 mt-5">
            {store.length > 0 &&
              store.map((str, index) => (
                <StoreDetailsCard
                  key={index}
                  id={str._id}
                  name={str.storename}
                  owner={str.ownername}
                  rating={str.rating}
                  workers={str.noofworker}
                 
                />
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
