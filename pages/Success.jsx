import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className='details'>
      <h3 style={{color:"#EEF1EF"}}>Application Submitted Successfully!</h3>
      <Link to={"/"} className="back-btn">&#8592; Back to Hompage</Link>
    </div>
  )
}
