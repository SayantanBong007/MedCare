"use client";
import React, { useEffect, useState, useRef } from "react";
import MedicineCard from "../../../components/MedicineCard";
import GoogleMapReact from "google-map-react";
// import { MapContainer, TileLayer,Marker, useMap } from "react-leaflet";
import { Map, Marker } from "maplibre-gl";
import axios from "axios";
import { getMedicine } from "../../../actions/medicine/medicineContriller";
// import { Axios } from "axios";

const page = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loc, setLoc] = useState("");
  const [arr, SetArr] = useState([]);

  const [query, setQuery] = useState("");

  const [searchParam] = useState(["storename", "name"]);

  const extractdata = async () => {
    const result = await getMedicine();
    SetArr(result.medicine);
  };
  useEffect(() => {
    extractdata();
    console.log(arr);
  }, []);

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
        "X-RapidAPI-Key": "f5178223bcmsh100b4b5cc5259e8p12a6f3jsn7835c31abf1c",
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

  const locString = JSON.stringify({
    location: loc,
    latitude: lat,
    longitude: long,
  });
  console.log(loc);
  // Store the stringified object in localStorage
  localStorage.setItem("location", locString);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filteredArr = arr.filter((item) => {
      return searchParam.some((param) => {
        return item[param].toLowerCase().includes(query.toLowerCase());
      });
      // return item.name.toLowerCase().includes(query.toLowerCase());
    });
    SetArr(filteredArr);
  };

  return (
    <div className="absolute left-[15vw] w-[85vw] h-max bg-[#E1EEFF] pt-[5rem] pl-[3rem] ">
      <div className="flex justify-around items-center">
        <div>
          <div className="flex">
            <img className="h-[3rem] w-[2rem]" src="/location.png" alt="" />
            <div className='text-black ml-[1rem] font-["Nunito Sans"]'>
              <h4 className="text-lg font-bold">Home</h4>
              <p className="text-sm">
                Deliver to <span>{loc}</span>
              </p>
            </div>
          </div>
          <div
            id="map"
            ref={mapContainer}
            className="w-[28rem] h-[12rem] mt-[1rem] mr-[0.5rem]  rounded-lg ml-5"
          >
            {/* map */}
          </div>
        </div>
        <div className="h-[15rem] w-[50rem] rounded-lg relative bg-[#0360D9] text-[#FFFFFF]">
          <div className="font-['Nunito Sans']">
            <h1 className="font-bold text-[2rem] mt-[2rem] ml-[6rem]">
              Welcome to MedCare!
            </h1>
            <p className="mt-[1rem] text-[1.3rem] ml-[3rem]">
              A platform designed to provide information about <br />
              <span className="ml-[2.5rem]">
                health parameters and medical benefits
              </span>
            </p>
            <button className="bg-[#FFFFFF] rounded-lg text-[#000000] mt-[1rem] ml-[10rem] h-[2rem] p-[1.5rem] flex items-center justify-center">
              30% Discount on 1st order
            </button>
          </div>
          <img
            className="absolute bottom-[1.5rem] left-0 h-[3rem] w-[5rem]"
            src="/ecg.png"
            alt=""
          />
          <img
            className="absolute right-[1rem] bottom-[-1.5rem] h-max w-[22rem]"
            src="/dashboard.png"
            alt=""
          />
          {/* image */}
        </div>
      </div>
      <div className="bottom">
        <div className="flex items-center mt-10">
          {/* searchbar */}
          <input
            placeholder="Search Store"
            className=" h-[3rem] w-[75%] p-[2rem] ml-10 rounded-md shadow-md text-black transition-colors duration-300 ease-in-out hover:bg-gray-100"
            type="text"
            value={query}
            onChange={(e) => handleSearch(e)}
          />
          <button className="h-[4rem] w-[10rem] bg-blue-500  ml-5 p-[1rem] rounded-md text-[1.4rem] flex justify-center items-center hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
            Search
          </button>
        </div>
        <div className="grid grid-cols-2 gap-[0.8rem] grid-flow-row mt-[3rem] ml-[3rem] overflow-auto h-[30rem] p-[1rem]">
          {/* medicine cards */}
          {/* {arr.length > 0 && console.log(arr[0]._id)} */}
          {arr.length > 0 &&
            arr.map((med, index) => (
              <MedicineCard
                key={index}
                id={med._id}
                name={med.name}
                desc={med.description}
                count={med.count}
                price={med.price}
                rating={med.rating}
                storename={med.storename}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
