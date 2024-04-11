import React from "react";
import {
  ProductMap,
  ProfitMap,
  StoreMap,
  UserMap,
} from "../../../components/maps";
import StoreDetailsCard from "../../../components/storeDetailsCard";

const page = () => {
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
            <StoreDetailsCard />
            <StoreDetailsCard />
            <StoreDetailsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
