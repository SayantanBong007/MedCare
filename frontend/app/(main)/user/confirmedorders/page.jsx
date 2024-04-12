"use client";
import React, { useEffect, useState, useRef } from "react";
import { CircleCheck } from 'lucide-react';
// import { MapContainer, TileLayer,Marker, useMap } from "react-leaflet";
import { Map, Marker } from "maplibre-gl";
import maplibregl from 'maplibre-gl';
import axios from "axios";

const Page = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [loc, setLoc] = useState("");
    const [arr, SetArr] = useState([]);
  
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
        attributionControl: false
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

    return (      
      <div className='w-screen bg-white text-black h-screen flex flex-col items-center'>
        <div className='flex flex-col h-1/2 w-2/3'>
            
          <div className='flex flex-row gap-5 '>
            <div>
              <CircleCheck size={48} color='green' />
            </div>
            <div>
              <h3>Order #1004</h3>
              <h1 className='text-xl font-bold'>Thank You Alex !</h1>
              
            </div>
            
          </div>
          
    
          <div className='flex flex-col gap-5'>
          <div className='border-2 pl-3 mt-10'>
          <div
            id="map"
            ref={mapContainer}
            className="h-[20rem] mt-[1rem] mr-[0.5rem]  rounded-md"
          >
            {/* map */}
          </div>
            <h1>Your Order is confirmed</h1>
            <p className='mb-3'>We have Accepted your Order and we're getting it ready. <br/>Come back to this page for updates.</p>
            <button className='h-[2.4rem] w-[14rem] bg-white border-2 '> <span className='text-blue-600'>Track Order</span>  <span className='text-blue-400'>with shop</span></button>
            <div className='border-t-2 mt-3'>
              <div>Other Tracking number:</div>
              <h1 className='text-blue-600'>123221132132</h1>
            </div>
          </div>
          <div className='flex flex-row mt-12 gap-16 border-2 w-[50%] pl-3'>
            <div className='flex flex-col'>
              <h1 className='mb-2'>Customer Information</h1>
              <p className='mb-6'>Email</p>
              <h1 className='font-bold'>Shipping Address:</h1>
            </div>
            <div className='flex flex-col'>
              <p className='mb-5'>Billing Address</p>
              <p>Address is here</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Page;





// import React, { useEffect } from 'react';
// import { CircleCheck } from 'lucide-react';
// import maplibregl from 'maplibre-gl';

// const Page = () => {
//     useEffect(() => {
//         const map = new maplibregl.Map({
//             container: 'map',
//             style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
//             center: [12.550343, 55.665957],
//             zoom: 8
//         });

//         new maplibregl.Marker()
//             .setLngLat([12.550343, 55.665957])
//             .addTo(map);
//     }, []); // Run once on component mount

//     return (
//         <div className='w-screen bg-white text-black h-screen flex flex-col items-center'>
//             <div className='flex flex-col h-1/2 w-2/3'>
//                 <div className='flex flex-row gap-5 '>
//                     <div>
//                         <CircleCheck size={48} color='green' />
//                     </div>
//                     <div>
//                         <h3>Order #1004</h3>
//                         <h1 className='text-xl font-bold'>Thank You Alex !</h1>
//                     </div>
//                 </div>
//                 <div className='border-2 pl-3'>
//                     <h1>Your Order is confirmed</h1>
//                     <p className='mb-3'>We have Accepted Your Order and we're getting it ready. Come back to this page for updates.</p>
//                     <button className='h-[2.4rem] w-[14rem] bg-white border-2 '> <span className='text-blue-600'>Track Order</span>  <span className='text-blue-400'>with shop</span></button>
//                     <div className='border-t-2 mt-3'>
//                         <div>Other Tracking number:</div>
//                         <h1 className='text-blue-600'>123221132132</h1>
//                     </div>
//                 </div>
//                 <div className='flex flex-row mt-12 gap-16 border-2 w-[50%] pl-3'>
//                     <div className='flex flex-col'>
//                         <h1 className='mb-2'>Customer Information</h1>
//                         <p className='mb-6'>Email</p>
//                         <h1 className='font-bold'>Shipping Address:</h1>
//                     </div>
//                     <div className='flex flex-col'>
//                         <p className='mb-5'>Billing Address</p>
//                         <p>Address is here</p>
//                     </div>
//                 </div>
//             </div>
//             <div id="map" className='w-screen h-[50vh]'></div>
//         </div>
//     );
// }

// export default Page;
