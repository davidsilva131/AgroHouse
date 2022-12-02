import { Container } from "@mui/material";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss'
import image1 from '../Assets/Images/campesino.jpg';
import image2 from '../Assets/Images/campesino2.jpg';
import image3 from '../Assets/Images/campo.jpg';


const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Container maxWidth='fixed'>
        <section className="home">
          <span>
            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
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
                  className="d-block w-100"
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
                  className="d-block w-100"
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
            </Carousel> */}
            <div className="container_image">
              <img src={image1} alt='image1' className="image1"/>
            </div>
          </span>
        </section>
      </Container>
    )
  };


  export default Home;
