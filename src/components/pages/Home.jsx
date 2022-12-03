import { Container } from "@mui/material";
import React from 'react';
import './Home.scss'
import '../styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/Images/campesino.jpg';

const Home = () => {

  return (
    <Container maxWidth='fixed'>
      <section className="home">
        <span>

          <div className="container_image">
            <img src={image1} alt='image1' className="image1" />
          </div>
          <h3 className="text-success text-center text-uppercase">algunos de nuestros productos</h3>

        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/Sf33URMBKNRLrURMx9JL23J4aVPXtZIOZMnXGDMlx8XlR3MbeG.jpg"
              alt="Imagen coco"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/qPtxYNzt44TmnkQKTeFxbEaics9aJB2TkBWJVVEKH7vGegWiu4.jpg"
              alt="Imagen arveja"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/muyHvkytC4hbkf6TzMNXMhMn74Dl3ij6Y53OmUZtls9B7wO7H2.jpg"
              alt="Imagen Coliflor"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/2rUGN6pK8GLQnZ7KQAM404UPoFUEGrS3jGvuKtZcGWTreS6aaO.jpg"
              alt="Imagen maracuya"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/dD8DlpGzZf6nipXZqahkZ6zuWRz6mUa36izfYIHxlhs4vRI3eQ.jpg"
              alt="Imagen papaya"
            />
            
          </Carousel.Item>
        </Carousel>
        </span>
      </section>
    </Container>
  )
};


export default Home;