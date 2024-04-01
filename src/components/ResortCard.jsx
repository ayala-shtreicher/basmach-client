import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


export default function ResortCard({ resort }) {
    const navigate = useNavigate();
    const moreDetials = () => {
        navigate(`/resort/${resort.id}`);
    }

    return (
        <>
                    <Card sx={{ maxWidth: 345 }} className='w-25 m-5 my-card'>
                        <CardMedia sx={{ height: 140 }}>
                            <Carousel>
                                {resort.images.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {resort.name}
                                {resort.adress}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={moreDetials} className='btn btn-primary' size="big">more...</Button>
                        </CardActions>
                    </Card>
        </>
    )
}
