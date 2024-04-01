import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios"
const MapComponent = ({ cities, callResortsByCities }) => {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const promises = cities?.map(async city => {
                try {
                    const response = await axios.get(
                        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                            city
                        )}&key=c539839f9040453cbabdc61cf01e3bb8`
                    );
                    const data = response.data;
                    if (data.results.length > 0) {
                        const { lat, lng } = data.results[0].geometry;
                        setCoordinates([...coordinates, { city, lat, lng }])
                        return { city, lat, lng };
                    } else {
                        console.error(`No results found for ${city}`);
                        return null;
                    }
                } catch (error) {
                    console.error(`Error fetching coordinates for ${city}:`, error);
                    return null;
                }
            });

            const citiesCoordinates = await Promise.all(promises);
            setCoordinates(citiesCoordinates.filter(Boolean));
        };

        fetchData();
    }, [cities]);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', width: '500px' }}>
                <MapContainer center={[31.5, 34.9]} zoom={8} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {coordinates?.map((location, index) => (
                        <Marker key={index} position={[location.lat, location.lng]}>
                            <Popup><button onClick={() => {
                                callResortsByCities(location.city)
                            }}>{location.city}</button></Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );

};

export default MapComponent;
