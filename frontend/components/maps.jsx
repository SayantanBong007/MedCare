"use client";

import { data1, data2, data3 } from "../constants/graphdata";
import { registerables, Chart } from "chart.js";

import { Bar } from "react-chartjs-2";
Chart.register(...registerables);
import { Colors } from "chart.js";

Chart.register(Colors);

const Graph = ({ data }) => {
  return <Bar className="w-ful rounded-lg " data={data} />;
};

export const UserMap = () => {
  return (
    <div className=" h-[100%] ml-[1rem]">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph data={data2} />
        </div>
      </div>
      <div className="flex justify-center item-center p-5">
        <div>
          <h3 className="text-2xl font-bold">Current Users</h3>
        </div>
      </div>
    </div>
  );
};
export const StoreMap = () => {
  return (
    <div className=" h-[100%] ml-[1rem]">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph data={data3} />
        </div>
      </div>
      <div className="flex justify-center item-center p-5">
        <div>
          <h3 className="text-2xl font-bold">Current Stores</h3>
        </div>
      </div>
    </div>
  );
};
export const ProfitMap = () => {
  return (
    <div className=" h-[100%] ml-[1rem]">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph data={data1} />
        </div>
      </div>
      <div className="flex justify-center item-center p-5">
        <div>
          <h3 className="text-2xl font-bold">Current Revenue</h3>
        </div>
      </div>
    </div>
  );
};

export const UserMap1 = () => {
  return (
    <div className=" h-[100%] ml-[1rem] w-full">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph width="35rem" height="30rem" data={data2} />
        </div>
      </div>
      <div className="flex justify-center item-center p-5">
        <div>
          <h3 className="text-2xl font-bold">Users Activity</h3>
        </div>
      </div>
    </div>
  );
};
export const UserMap2 = () => {
  return (
    <div className=" h-[100%] ml-[1rem] w-full">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph width="35rem" height="30rem" data={data2} />
        </div>
      </div>
      <div className="flex justify-center item-center p-5">
        <div>
          <h3 className="text-2xl font-bold">Users Activity</h3>
        </div>
      </div>
    </div>
  );
};
