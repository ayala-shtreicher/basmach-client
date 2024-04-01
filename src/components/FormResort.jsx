import React, { useContext, useState } from 'react';
import { resortContext } from '../context/resortContext';
import { useNavigate } from 'react-router-dom';
import UpImage from './UpImage';

export default function FormResort() {
    const { addResort } = useContext(resortContext)
    const [formData, setFormData] = useState({
        name: '',
        images: [],
        price: '',
        adress: '',
        accessibility: '',
        category: "",
        numBed: "",
        ownerId: "",
        description: '',
        phone: '',
        city: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e;
        if (file) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                images: [...prevFormData.images, file],
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // ניתן להוסיף פה לוגיקת שליחת הטופס לשרת או לעשות משהו אחר
        // formData.images.push(selectedImage);
        // console.log('Form submitted:', formData);

        addResort(formData);
        navigate("/Owner")
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='w-50'>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="form6Example1">שם האתר:</label>
                            <input type="text" id="form6Example1" class="form-control" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="form6Example2">מחיר:</label>
                            <input type="text" id="form6Example2" class="form-control" name="price" value={formData.price} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example3">כתובת:</label>
                    <input type="text" id="form6Example3" class="form-control" name="adress" value={formData.adress} onChange={handleChange} />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">עיר:</label>
                    <input type="text" id="form6Example4" class="form-control" name="city" value={formData.city} onChange={handleChange} />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example6">טלפון:</label>
                    <input type="tel" id="form6Example6" class="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">מספר מיטות:</label>
                    <input type="email" id="form6Example5" class="form-control" name="numBed" onChange={handleChange} max={50} />
                </div>


                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example7">מידע נוסף:</label>
                    <textarea class="form-control" id="form6Example7" rows="4" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                    שלח
                </button>
                <select class="form-select form-select-lg mb-3" aria-label="Large select example" name="accessibility" onChange={event => { handleChange(event) }}>
                    <option selected>סוגי נכויות:</option>
                    <option value="visual">visual</option>
                    <option value="hearing">hearing</option>
                    <option value="motor">motor</option>
                    <option value="mentalHealth">mentalHealth</option>
                </select>
                <select class="form-select form-select-lg mb-3" aria-label="Large select example" name="category" onChange={event => { handleChange(event) }}>
                    <option selected> קטגוריה:</option>
                    <option value="hotelRoom">hotelRoom</option>
                    <option value="b&b">b&b</option>
                    <option value="vila">vila</option>
                </select>
                <UpImage handleImage={handleImageChange} formData={formData} setFormData={setFormData} />
            </form>
        </div>
    );
};

