"use client";

import React, { useEffect, useState } from "react";
import StoreAnalysis from "../../../../../components/storeAnalysis";
import {
  getOrders,
  getStoreDetails,
} from "../../../../../actions/store/storeController";
import { usePathname } from "next/navigation";
import { FileTerminal } from "lucide-react";

const page = () => {
  const [last, setLast] = useState("");
  const [store, setStore] = useState({});
  const [order, setOrder] = useState({ orders: [] });
  const pathname = usePathname();

  // Triggered when last changes

  useEffect(() => {
    const parseUrlParams = () => {
      const parts = pathname.split("/");

      const lastPart = parts.pop();
      setLast(lastPart);
      console.log("Last part of the URL:", lastPart);
    };
    parseUrlParams();
    // Call the parseUrlParams function
  }, [pathname]);

  useEffect(() => {
    if (last) {
      const extractStoreDetails = async (id) => {
        try {
          const data = await getStoreDetails(id);
          setStore(data.store);
          // console.log(id);
          console.log(data.store);
        } catch (error) {
          console.error("Error fetching store details:", error);
        }
      };
      extractStoreDetails(last);
    }
  }, [last]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders(store.storename);
        console.log(data.order);

        setOrder(data.order);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error if needed
      }
    };

    fetchOrders();
  }, []);

  const [filteredOrder, setFilteredOrder] = useState([]);

  useEffect(() => {
    console.log(order);
    if (order) {
      try {
        const filteredOrders = order.filter((item) => {
          return item.storename
            .toLowerCase()
            .includes(store.storename.toLowerCase());
        });
        setFilteredOrder(filteredOrders); // Update filteredOrder state
      } catch (error) {
        console.error("Error filtering orders:", error);
      }
    }
  }, [order]);

  // useEffect(() => {
  //   console.log(order);
  //   if (order) {
  //     try {
  //       const filteredOrders = order.filter((item) => {
  //         return item.storename
  //           .toLowerCase()
  //           .includes(store.storename.toLowerCase());
  //       });
  //       setFilteredOrder(filteredOrders); // Use a separate state variable for filtered orders
  //     } catch (error) {
  //       console.error("Error filtering orders:", error);
  //     }
  //   }
  // }, [order]);

  // useEffect(() => {
  //   // Update the order state only when filtered orders are updated
  //   setOrder(filteredOrder);
  // }, []);

  return (
    <div className=" h-screen w-[85vw] flex ">
      <div className="h-full w-full p-5  ">
        <div className=" bg-blue-100 h-full rounded-lg p-14 overflow-auto">
          <div className="flex flex-col">
            {/* <div className="flex flex-row">
              <input
                placeholder="Search Store"
                className=" h-[3rem] w-full p-[2rem] rounded-md shadow-md text-black transition-colors duration-300 ease-in-out hover:bg-gray-100"
                type="text"
              />
              <button className="h-[4rem] w-[10rem] ml-[4rem] bg-blue-500 p-[1rem] rounded-md text-[1.4rem] flex justify-center items-center hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
                Search
              </button>
            </div> */}
            <StoreAnalysis
              workers={store.noofworker}
              rating={store.rating}
              name={store.storename}
              manager={store.ownername}
              key={store._id}
              stock={store.stock && store.stock.length}
              orders={filteredOrder.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
