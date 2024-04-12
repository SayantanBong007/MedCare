"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const loc = JSON.parse(localStorage.getItem("location"));
console.log(loc);
const latitude = loc.latitude;
const longitude = loc.longitude;
console.log(latitude);
// Your component code continues...

import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Preset initial and final coordinates
    const finalCoords = [latitude, longitude];
    const initialCoords = [29.856823, 77.879601]; // Example final coordinates

    // Create map instance
    const map = L.map("map").setView(initialCoords, 11);
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 18,
    }).addTo(map);

    // Create taxi icon
    const taxiIcon = L.icon({
      iconUrl: "/drone.jpg",
      iconSize: [70, 70],
    });

    // Add marker with taxi icon
    const marker = L.marker([28.238, 83.9956], { icon: taxiIcon }).addTo(map);

    // Routing control setup
    L.Routing.control({
      waypoints: [
        L.latLng(initialCoords[0], initialCoords[1]), // Initial coordinates
        L.latLng(finalCoords[0], finalCoords[1]), // Final coordinates
      ],
      lineOptions: {
        styles: [
          {
            color: "blue",
            weight: 4,
            opacity: 0.6,
          },
        ],
      },
    })
      .on("routesfound", function (e) {
        const routes = e.routes;
        console.log(routes);

        e.routes[0].coordinates.forEach(function (coord, index) {
          setTimeout(function () {
            marker.setLatLng([coord.lat, coord.lng]);
          }, 600 * index);
        });
      })
      .addTo(map);

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapComponent;
