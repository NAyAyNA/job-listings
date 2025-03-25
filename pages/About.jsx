import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className='details'>
      <h1>About Us</h1>
      <p style={{color: "#EEF1EF"}}>Welcome! We are your one-stop destination for exploring exciting career opportunities. <br /> Our mission is to bridge the gap between employers and job seekers by providing a seamless and user-friendly platform.</p>
      <Link to={"/"} className="back-btn">&#8592; Back to Hompage</Link>
    </div>
  )
}
