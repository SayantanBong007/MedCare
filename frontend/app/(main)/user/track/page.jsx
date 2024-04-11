'use client';
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

// Your component code continues...

import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
    useEffect(() => {
        // Preset initial and final coordinates
        const initialCoords = [28.6687778, 77.3692778];
        const finalCoords = [29.8646667, 77.8926944]; // Example final coordinates

        // Create map instance
        const map = L.map('map').setView([28.2380, 83.9956], 11);
        const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

        // Create taxi icon
        const taxiIcon = L.icon({
            iconUrl: '/drone.jpg',
            iconSize: [70, 70]
        });

        // Add marker with taxi icon
        const marker = L.marker([28.2380, 83.9956], { icon: taxiIcon }).addTo(map);

        // Routing control setup
        L.Routing.control({
            waypoints: [
                L.latLng(initialCoords[0], initialCoords[1]), // Initial coordinates
                L.latLng(finalCoords[0], finalCoords[1])      // Final coordinates
            ]
        }).on('routesfound', function (e) {
            const routes = e.routes;
            console.log(routes);

            e.routes[0].coordinates.forEach(function (coord, index) {
                setTimeout(function () {
                    marker.setLatLng([coord.lat, coord.lng]);
                }, 30 * index)
            })

        }).addTo(map);

        // Clean up on unmount
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    );
};

export default MapComponent;
