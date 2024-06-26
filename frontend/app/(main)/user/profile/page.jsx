"use client";

import React, { useEffect, useState } from "react";
import {
  CurrentCard,
  PreviousCard,
} from "../../../../components/medicineHistory";
import { getUser, register } from "../../../../actions/user/userController";
import { getOrders } from "../../../../actions/store/storeController";

const page = () => {
  const [displayOrders, setDisplayOrders] = useState("previous");
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState({ orders: [] });
  const [previousOrder, setPreviousOrder] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);

  const extractdata = async () => {
    const result = await getUser();
    setUser(result.user);
  };

  useEffect(() => {
    extractdata();
    console.log(user);
  }, []);

  // const useridString = JSON.stringify({ userid: user._id });

  // // Store the stringified object in localStorage
  // localStorage.setItem("userid", useridString);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        console.log(data.order);

        setOrder(data.order);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error if needed
      }
    };

    fetchOrders();
  }, []);
  console.log(order);

  useEffect(() => {
    console.log(order);
    if (order) {
      try {
        const previousOrders = worker.filter(
          (item) =>
            item.ordertype !== true &&
            item.storename.toLowerCase().includes(name.toLowerCase())
        );

        // setCurrentOrder(currentOrders);
        setPreviousOrder(previousOrders);
      } catch (error) {
        console.error("Error filtering orders:", error);
      }
    }
  }, [order]);

  useEffect(() => {
    console.log(order);
    if (order) {
      try {
        const currentOrders = order.filter(
          (item) =>
            item.ordertype === true &&
            item.storename.toLowerCase().includes(name.toLowerCase())
        );

        setCurrentOrder(currentOrders);
        // setPreviousOrder(previousOrders);
      } catch (error) {
        console.error("Error filtering orders:", error);
      }
    }
  }, [order]);

  console.log(currentOrder);
  console.log(previousOrder);

  return (
    <div className="  h-screen w-[85vw] flex overflow-auto ">
      <div className="p-5 h-full w-1/5 overflow-hidden ">
        <div className="h-full bg-white rounded-lg gap-10">
          <h4 className="text-3xl font-bold flex justify-center items-center pt-10">
            Profile
          </h4>

          <div className="flex flex-col justify-center items-center p-2 pt-10">
            <img
              className="h-50 w-50 bg-green-400 m-5 rounded-md"
              src={user.avatar}
              alt="user photo"
            />
            <h5 className="text-2xl font-bold m-5 pt-10">User Details</h5>
          </div>

          <div className="flex justify-start pl-3 flex-col flex-1 gap-8">
            <div className="pt-3">
              <div className="text-sm">Name:</div>
              <div className="font-bold text-xl pt-2">{user.fullName}</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Contact Number:</div>
              <div className="font-bold text-xl pt-2">{user.phone}</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Email Id:</div>
              <div className="font-bold text-xl pt-2">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-4/5 p-5 pl-2 ">
        <div className=" bg-blue-100 h-full rounded-lg p-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-start w-full mb-5 gap-10">
              <div className="flex justify-start">
                <button
                  className={`bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:bg-blue-700 ${
                    displayOrders === "previous" ? "bg-blue-700" : ""
                  }`}
                  onClick={() => setDisplayOrders("previous")} // Set displayOrders state to 'previous' when button is clicked
                >
                  Previous Orders
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className={`bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:bg-blue-700 ${
                    displayOrders === "current" ? "bg-blue-700" : ""
                  }`}
                  onClick={() => setDisplayOrders("current")} // Set displayOrders state to 'current' when button is clicked
                >
                  Current Orders
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              {displayOrders === "current" &&
                currentOrder.map((order, index) => (
                  <CurrentCard key={index} order={order} />
                ))}
              {displayOrders === "previous" &&
                previousOrder.map((order, index) => (
                  <PreviousCard key={index} order={order} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
