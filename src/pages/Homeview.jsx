import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeviewContent from '../components/HomeviewContent';

const Homeview = ({blogs}) => {
  return (
    <div> <Navbar />,
    <HomeviewContent blogs ={blogs ? blogs : ""} />, 
    <Footer /></div>
  )
}

export default Homeview;