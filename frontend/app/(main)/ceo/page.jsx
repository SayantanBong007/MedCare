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
  const [order, setOrder] = useState({ orders: [] });
  const [query, setQuery] = useState("");

  const extractdata = async () => {
    try {
      const result = await getStore();
      setStore(result.store);

      // Call fetchOrders after setting the store state
      fetchOrders();
    } catch (error) {
      console.error("Error fetching store data:", error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    extractdata();
  }, []);

  useEffect(() => {
    console.log("Store length:", store.length);
    const fetchOrders = async () => {
      try {
        if (store.length > 0) {
          console.log("Fetching orders...");
          const ordersPromises = store.map(async (str) => {
            const data = await getOrders(str.storename);
            return data.orders.length;
          });
          const ordersLengths = await Promise.all(ordersPromises);
          const orders = ordersLengths.reduce((acc, length, index) => {
            acc[store[index]._id] = length;
            return acc;
          }, {});
          console.log("Fetched orders:", orders);
          setOrder({ orders });
        } else {
          console.log("No stores found.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error if needed
      }
    };

    // Note: fetchOrders is now defined inside the second useEffect
  }, [store]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filteredArr = store.filter((item) => {
      return item.storename.toLowerCase().includes(query.toLowerCase());
      // return item.nam
      e.toLowerCase().includes(query.toLowerCase());
    });
    setStore(filteredArr);
  };

  return (
    <div className=" h-screen w-[85vw] flex overflow-auto">
      <div className="h-full w-full p-5  ">
        <div className=" bg-blue-100 h-full rounded-lg p-14 overflow-auto">
          <div className="grid grid-cols-3 gap-5 ">
            <UserMap />
            <StoreMap />
            <ProfitMap />
          </div>
          <div className="flex flex-row">
            <input
              placeholder="Search Store"
              className=" h-[3rem] w-full p-[2rem] rounded-md shadow-md text-black transition-colors duration-300 ease-in-out hover:bg-gray-100"
              type="text"
              value={query}
              onChange={(e) => handleSearch(e)}
            />
            <button className="h-[4rem] w-[10rem] ml-[4rem] bg-blue-500 p-[1rem] rounded-md text-[1.4rem] flex justify-center items-center hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
              Search
            </button>
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
                  orders={order.orders[str._id] || 0}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
