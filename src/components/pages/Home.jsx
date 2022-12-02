import { Container } from "@mui/material";
import React from 'react';
import './Home.scss'
import image1 from '../Assets/Images/campesino.jpg';

const Home = () => {

  return (
    <Container maxWidth='fixed'>
      <section className="home">
        <span>

          <div className="container_image">
            <img src={image1} alt='image1' className="image1" />
          </div>
        </span>
      </section>
    </Container>
  )
};


export default Home;
