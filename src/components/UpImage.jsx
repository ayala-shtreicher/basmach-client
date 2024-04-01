import { useState } from 'react';



const UpImage = ({ handleImage, formData, setFormData }) => {
    const [imageUpload, setImageUpload] = useState([]);
    const [status, setStatus] = useState(false);
    const imagesUrl = [];
    const handleUpload = async (file) => {
        if (!file) {
            console.error('No file selected');
            return;
        }
        const images = new FormData();
        for (let i = 0; i < file.length; i++) {
            images.append("images", file[i]);
        }
        try {
            const response = await fetch('http://localhost:8200/accessiableHeaven/api/v1/resorts/upload', {
                method: 'POST',
                body: images,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.data.length);
                result.data?.map(image => { imagesUrl.push(image.secure_url) });
                console.log("imagesUrl", imagesUrl);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    images: [...prevFormData.images, imagesUrl]
                }));
            } else {
                console.error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    const uploadImage = async (e) => {
        setStatus(true)
        e.preventDefault();
        console.log(imageUpload[0]);
        try {
            if (imageUpload === null) return;

            const res = await handleUpload(imageUpload[0]);

            setStatus(false)

            handleImage(res);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleImageChange = (e) => {
        const selectedImages = e.target.files;
        console.log('selectedImagessssssssss', selectedImages);
        setImageUpload([...imageUpload, selectedImages]);
    };

    return (
        <div>
            <input type="file" accept="images/*" name="images" onChange={handleImageChange} multiple />
            {status &&
                <div className="spinner-border text-info fs-1" role="status">
                </div>
            }
            <button className="btn btn-secondary btn-lg btn-block text-info" onClick={uploadImage}>Upload Image</button>
        </div>
    );
};

export default UpImage;
