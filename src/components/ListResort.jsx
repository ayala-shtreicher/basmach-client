import React, { useContext, useEffect, useState } from 'react'
import { resortContext } from '../context/resortContext'
import MapComponent from './MapComponent';
import ResortCard from './ResortCard';
import NavBar from './NavBar';
import Account from './Account';
import { userContext } from '../context/userContext';
import RangeSlider from 'react-bootstrap-range-slider';


export default function ListResort() {
    // const navigate = useNavigate();

    const [city, setCity] = useState({ name: '', coordinates: null });
    const { userLogin } = useContext(userContext)
    const [cities, setCities] = useState([]);

    const { resorts, getAllResorts, getResortByPrice, getResortByCategory, getResortByDisabled, getResortByCity, getAllCitiesResorts } = useContext(resortContext);
    const [maxPrice, setMaxPrice] = useState("");
    const [category, setCategory] = useState('');
    useEffect(() => {
        callResortsByCities("");
        const fullCities = async () => {
            getAllCitiesResorts().then(data => {
                setCities(data)
            })
        };
        fullCities();
    }, [])
    const callResortsByCities = (city) => {
        if (city)
            getResortByCity(city)
        else
            getAllResorts("''")
    }
    const handlePriceFilter = () => {
        if (maxPrice !== '') {
            
            const maxParse = +maxPrice;
            getResortByPrice(maxParse);
        }
    };

    const handleCategoryFilter = () => {
        if (category !== '') {
            getResortByCategory(category);

        }
    };
    resorts;
    return (
        <div>
            <NavBar />

            <div>
                <div className='d-flex'>
                    <div style={{ width: '1000px', margin: '20px' }}>
                        <RangeSlider
                            value={maxPrice}
                            max={2000}
                            onChange={changeEvent => setMaxPrice(changeEvent.target.value)}
                        />

                    </div>
                    <button onClick={handlePriceFilter}>חיפוש לפי מחיר</button>
                </div>
                <div>
                    <label>קטגוריה:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">בחר קטגוריה</option>
                        <option value="vila">וילה</option>
                        <option value="b&b">B&B</option>
                        <option value="hotelRoom">חדר במלון</option>
                    </select>
                    <button onClick={handleCategoryFilter}>חיפוש לפי קטגוריה</button>
                </div>
                <button onClick={() => { getResortByDisabled(userLogin.disabled) }}>סנן לפי הנכות שלי:</button>
            </div>
            <MapComponent cities={cities} callResortsByCities={callResortsByCities} />
            {resorts?.map((resort) => {
                return <ResortCard
                    resort={resort}
                    key={resort.id}
                />
            })}
        </div>


    )
}
