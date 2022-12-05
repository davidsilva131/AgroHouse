import { Container } from "@mui/material";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss'
import image1 from '../Assets/Images/c1.jpg';
import image2 from '../Assets/Images/c2.jpg';
import image3 from '../Assets/Images/c3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.css'



const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container maxWidth='fixed'>
      <section className="home">
        <span>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carousel1'>
            <Carousel.Item>
              <img
                className="image "
                src={image1}
                alt="First slide"

              />
              <Carousel.Caption>
                <h3>LA MEJOR OPCIÓN</h3>
                <p>¡Del campo para todos!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image"
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>PRODUCTOS FRESCOS</h3>
                <p>Desde las montañas de Colombia</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image"
                src={image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>HERMOSAS REGIONES</h3>
                <p>
                  De nuestro hermoso país
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="container_image">

          </div>
        </span>
      </section>

      <h2>FAVORITOS DEL CAMPO</h2>
      <section className="home_cards">
        <span>
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