import React from "react";
import Data from './assets/datagov.jpg';
import digitalindia from './assets/digitalindia.jpg';
import meity from './assets/meity.jpg';
import pmindia from './assets/pmindia.jpg';
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <h2>"Collaborative Efforts for Crime Reduction and Societal Improvement: National Crime Records Bureau Content Management System"</h2>
            <h1>Copyright © 2024. All Rights Reserved</h1>
            <a href="https://data.gov.in/"><img src={Data} alt='Facebook'  className="img1"/></a>
            <a href="https://www.digitalindia.gov.in/"><img src={digitalindia} alt='Linkedin'className="img1"/></a>
            <a href="https://www.meity.gov.in/"><img src={meity} alt='Instagram'className="img1"/></a>
            <a href="https://www.pmindia.gov.in/en/"><img src={pmindia} alt=' Twitter'className="img1"/></a>
            <p>
            Belagavi Police Station. All Rights Reserved. <br/>
            Powered by the Department of Computer Science and Engineering, <br/>
            KLE Technological University, Belagavi, Karnataka, India, PIN: 590008. <br/>
            Best viewed in the latest version of Chrome.
          </p>
       </div>      
    );
}

export default Footer;