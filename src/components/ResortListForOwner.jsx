import React, { useContext ,useState,useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import { useParams  } from 'react-router-dom';
import { resortContext } from '../context/resortContext';

export default function ResortListForOwner(props) {
    const { resort } = props;
    const { resorts, getResortById } = useContext(resortContext);
    const [showEvents,SetShowEvents]=useState(false)
    useEffect(() => {
    }, []);

  return (
    <div>
    <div className="card" >
        <Carousel>
            {resort.images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
            ))}
        </Carousel>             
           <div className="card-body">
            <h5 className="card-title">{resort.name}</h5>
            <p className="card-text">{resort.adress}</p>
        </div>
        <button onClick={()=>{SetShowEvents(!showEvents)}}>תציג\תסתיר את כל התאריכים המלאים</button>
        {showEvents&&resort.events.map(event=><p>{event}</p>)}
    </div>
</div>  )
}
