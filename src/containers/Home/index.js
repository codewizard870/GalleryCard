import React from 'react';
import './index.scss';
import Navbar from './navbar';
import Hero from './hero';
import Photos from './photos';
import AboutUs from './about-us';
import Map from './map';
import Info from './info';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <Photos />
      <AboutUs />
      <Map />
      <Info />
    </div>
  )
}

export default Home;
