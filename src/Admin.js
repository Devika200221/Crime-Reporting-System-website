import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Admin() {
  return (
    <>
      <div className="container">
        <div className="box">

        </div>
        <div className="text-box">
        {/* <h1>Welcome to our Vigilance Portal</h1>
        <p>Report crimes and contribute to community safety.</p> */}
          <p>
            The law in Victoria says that you are a victim of crime if you have
            suffered physical injury, emotional injury, or financial loss because of a <br></br>CRIME.
          </p>
          
          </div>
          </div>
      
      <nav className="left">
        <ul>
          
          <li><Link to="/adminregister">AdminRegister</Link></li>
          <li><Link to="/adminlogin">AdminLogin</Link></li>
          <li><Link to="/Crimes">Crimes</Link></li>

        </ul>
      </nav>
      
   
    </>
  );
}

export default Admin;
