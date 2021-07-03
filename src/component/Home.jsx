import React from 'react';
import Common from './Common';
import web from "../images/img2.svg";

const Home = () => {

  return (
    <>
      <Common
      name="Grow Your Business With" 
      imgsrc={web} 
      visit="/service" 
      btname="Get Started"/>
    </>
  )
}

export default Home;

