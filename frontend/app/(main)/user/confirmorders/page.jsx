"use client";
import React, { useEffect, useState, useRef } from "react";
import { CircleCheck } from "lucide-react";
// import { MapContainer, TileLayer,Marker, useMap } from "react-leaflet";
import { Map, Marker } from "maplibre-gl";
import maplibregl from "maplibre-gl";
import axios from "axios";
import { getUser } from "../../../../actions/user/userController";
import { usePathname } from "next/navigation";

const Page = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loc, setLoc] = useState("");
  const [arr, SetArr] = useState([]);

  const [user, setUser] = useState([]);

  const extractdata = async () => {
    const result = await getUser();
    setUser(result.user);
  };

  const extractMedicineDetails = async (id) => {
    const data = await getMedicineDetails(id);
    setMed(data.spmed);

    useEffect(() => {
      extractdata();
      console.log(user);
    }, []);

    useEffect(() => {
      const parseUrlParams = () => {
        const parts = pathname.split("/");

        const lastPart = parts.pop();
        setLast(lastPart);

        console.log("Last part of the URL:", lastPart);
      };

      // Call the parseUrlParams function
      parseUrlParams();
      extractMedicineDetails(last);
    });

    useEffect(() => {
      const successCallback = (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        // console.log(position.coords.latitude);
      };

      const errorCallback = (error) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      // console.log(lat)
      // console.log(long)
    }, [lat, long]);
    const mapContainer = useRef(null);

    useEffect(() => {
      const map = new Map({
        container: mapContainer.current,
        style:
          "https://api.maptiler.com/maps/streets-v2/style.json?key=eYEzTHGTC1rxkqJeeNuJ", // Example style
        center: [long - 0.0040507, lat - 0.0040507], // Example center [lng, lat]
        zoom: 15, // Example zoom
        attributionControl: false,
      });
      const marker = new Marker({
        color: "#FF0000",
      })
        .setLngLat([long, lat])
        .addTo(map);

      return () => map.remove(); // Clean up on unmount
    }, [lat]);

    useEffect(() => {
      console.log(long);
      console.log(lat);
      const options = {
        method: "GET",
        url: "https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",
        params: {
          location: `${lat},${long}`,
          language: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "f5178223bcmsh100b4b5cc5259e8p12a6f3jsn7835c31abf1c",
          "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
        },
      };

      try {
        const location = async () => {
          const response = await axios.request(options);
          if (response) {
            setLoc(response.data.results[1].sublocality);
            console.log(response.data.results[1].sublocality);
          }
        };
        location();
      } catch (error) {
        console.error(error);
      }
    }, [lat]);

    const storedLocString = localStorage.getItem("location");

    // Parse the stringified object back to an object
    //   const storedLocObject = JSON.parse(storedLocString);
    function generateOrderId() {
      // Get current timestamp in milliseconds
      const timestamp = new Date().getTime();

      // Generate a random number between 0 and 9999
      const random = Math.floor(Math.random() * 10000);

      // Combine timestamp and random number to create the order ID
      const orderId = `${timestamp}-${random}`;

      return orderId;
    }

    const orderId = generateOrderId();

    return (
      <div className="w-screen bg-white text-black h-screen flex flex-col items-center">
        <div className="flex flex-col h-1/2 w-2/3">
          <div className="flex flex-row gap-5 ">
            <div>
              <CircleCheck size={48} color="green" />
            </div>
            <div>
              <h3>Order #{orderId}</h3>
              <h1 className="text-xl font-bold">Thank You {user.fullName} !</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border-2 pl-3 mt-10">
              <div
                id="map"
                ref={mapContainer}
                className="h-[20rem] mt-[1rem] mr-[0.5rem]  rounded-md"
              >
                {/* map */}
              </div>
              <h1>Your Order is confirmed</h1>
              <p className="mb-3">
                We have Accepted your Order and we're getting it ready. <br />
                Come back to this page for updates.
              </p>
              <button className="h-[2.4rem] w-[14rem] bg-white border-2 ">
                {" "}
                <span className="text-blue-600">Track Order</span>{" "}
                <span className="text-blue-400">with shop</span>
              </button>
              <div className="border-t-2 mt-3">
                <div>Other Tracking number:</div>
                <h1 className="text-blue-600">123221132132</h1>
              </div>
            </div>
            <div className="flex flex-row mt-12 gap-16 border-2 w-[50%] pl-3">
              <div className="flex flex-col">
                <h1 className="mb-2">Customer Information</h1>
                <p className="mb-6">Email:{user.email}</p>
                {/* <h1 className="font-bold">Shipping Address:</h1> */}
              </div>
              <div className="flex flex-col">
                <p className="mb-5">Billing Address:</p>
                <p>{storedLocString}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Page;
