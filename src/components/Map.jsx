import React, { useContext, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { resortContext } from '../context/resortContext';

const Map = ({ placesResorts, city = { lat: 32.109333, lng: 34.855499 } }) => {
    const [localCoords, setLocalCoords] = useState([]);
    const { setCity } = useContext(resortContext);
    // const navigate = useNavigate();
    // console.log("placesResorts",placesResorts);
    useEffect(() => {
        const map = L.map('map').setView([city.lat, city.lng], 9);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);
        if (placesResorts) {
            placesResorts.forEach((place) => {
                console.log(place);
                
                L.marker([place.lat, place.lng]).addTo(map).addEventListener("click", () => {
                    // setCity("netanya")
                });
            });
        }

        return () => {
            // ניקוי המפה כאשר הרכיב יוסר
            map.remove();
        };
    }, []);


    useEffect(() => {
        // setLocalCoords([...placesResorts])
    }, [])


    return (
        <div id="map" style={{ width: '100%', height: '500px' }}>
        </div>
    );
};

export default Map;
