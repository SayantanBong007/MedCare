"use client";

import { data1, data2, data3 } from "../constants/graphdata";
import { registerables, Chart } from "chart.js";

import { Bar ,Line,Pie } from "react-chartjs-2";
Chart.register(...registerables);
import { Colors } from "chart.js";

Chart.register(Colors);

const Graph = ({ data }) => {
  return <Bar className="w-ful rounded-lg " data={data} />;
};
const Graph2 = ({ data }) => {
  return <Line className="w-full h-[30rem] rounded-lg " data={data} />;
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
  // const ndata=[] ;
  //   for(let i=0 ;i<7 ;i++) ndata.push(data2[(Math.floor(Math.random*15))])
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
  const ar= data2.datasets[0].data
  const len= data2.datasets[0].data.length 
  console.log(len) 
  const newar= [] ;
  for(let i=0 ;i<5 ;i++) newar.push(ar[Math.floor(Math.random()*len)])
  data2.datasets[0].data= newar
  return (
    <div className=" h-[100%]  ml-[1rem] w-full">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph width="30rem" height="30rem" data={data2} />
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
export const UserMap2pie = () => {
  const ar= data2.datasets[0].data
  const len= data2.datasets[0].data.length  
  console.log(len) 
  const newar= [] ;
  for(let i=0 ;i<5 ;i++) newar.push(ar[Math.floor(Math.max(0,Math.random()-0.5)*len)])
  data2.datasets[0].data= newar
  return (
    <div className=" h-full ml-[1rem] w-full">
      <div className=" bg-white rounded-[0.4rem] p-[1rem] ">
        <div>
          <Graph2 width="30rem" height="30rem" data={data2} />
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