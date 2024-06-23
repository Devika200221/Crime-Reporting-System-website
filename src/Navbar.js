import React from "react";
import './Navbar.css';
import crimelogo from './assets/crimelogo.png'; 
 
// import search_icon_light from './assets/searchw.png'; 

import { Link } from "react-router-dom";


const Navbar =() => {

    return (
        <div className="navbar">
            <div className="crime-logo">
        <img src={crimelogo} alt="crimelogo" className="logo" />
        </div>
        <h1> CRIME PORTAL</h1>
        <div className="nav-item">
                  <ul >
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/About">About</Link>
                  </li>
                  <li>
                      <Link to="/Contact">Contact</Link>
                  </li>
                  <li>
                      <Link to="/Logout">Logout</Link>
                  </li>
                  </ul>


                  {/* <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon_light} alt=""  />
                  </div> */}
                 
        </div>
               
      
  </div>
    )
  }
  
  export default Navbar