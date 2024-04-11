'use client';
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as turf from '@turf/turf';

const MapAnimation = () => {
    
    useEffect(() => {
        const origin = [77.3692778, 28.6687778];
    const destination = [77.8926944, 29.8646667];
        const map = new maplibregl.Map({
            container: 'map',
            style: 'https://api.maptiler.com/maps/streets/style.json?key=ynbNdxMGVPn6Ad57EtpA',
            center: origin,
            zoom: 3
        });

      

        const route = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [origin, destination]
                    }
                }
            ]
        };

        const point = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'Point',
                        'coordinates': origin
                    }
                }
            ]
        };

        const lineDistance = turf.lineDistance(route.features[0], 'kilometers');
        const arc = [];
        const steps = 500;

        for (let i = 0; i < lineDistance; i += lineDistance / steps) {
            const segment = turf.along(route.features[0], i, 'kilometers');
            arc.push(segment.geometry.coordinates);
        }

        route.features[0].geometry.coordinates = arc;

        let counter = 0;

        map.on('load', () => {
            map.addSource('route', {
                'type': 'geojson',
                'data': route
            });

            map.addSource('point', {
                'type': 'geojson',
                'data': point
            });

            map.addLayer({
                'id': 'route',
                'source': 'route',
                'type': 'line',
                'paint': {
                    'line-width': 2,
                    'line-color': '#007cbf'
                }
            });

            map.addLayer({
                'id': 'point',
                'source': 'point',
                'type': 'symbol',
                'layout': {
                    'icon-image': 'airport_15',
                    'icon-rotate': ['get', 'bearing'],
                    'icon-rotation-alignment': 'map',
                    'icon-overlap': 'always',
                    'icon-ignore-placement': true
                }
            });

            function animate() {
                point.features[0].geometry.coordinates =
                    route.features[0].geometry.coordinates[counter];

                point.features[0].properties.bearing = turf.bearing(
                    turf.point(
                        route.features[0].geometry.coordinates[
                            counter >= steps ? counter - 1 : counter
                        ]
                    ),
                    turf.point(
                        route.features[0].geometry.coordinates[
                            counter >= steps ? counter : counter + 1
                        ]
                    )
                );

                map.getSource('point').setData(point);

                if (counter < steps) {
                    requestAnimationFrame(animate);
                }

                counter = counter + 1;
            }

            document
                .getElementById('replay')
                .addEventListener('click', () => {
                    point.features[0].geometry.coordinates = origin;
                    map.getSource('point').setData(point);
                    counter = 0;
                    animate(counter);
                });

            animate(counter);
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div id="map" style={{ height: '100vh', width: '100%' }}></div>
            <div className="overlay">
                <button id="replay">Replay</button>
            </div>
        </div>
    );
};

export default MapAnimation;
