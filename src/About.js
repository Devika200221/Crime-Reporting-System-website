import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-us">
            <div className="section welcome">
                <h1>About Us</h1>
                
                <p>Welcome to the Crime Reporting System. Our mission is to ensure a safe and secure environment by providing an efficient platform for reporting and tracking crimes.
                Report crimes and contribute to community safety.
                </p>
            </div>
            <div className="section vision">
                <h2>Our Vision</h2>
                <p>We envision a society where every citizen feels safe and protected. Our system is designed to facilitate the prompt and accurate reporting of crimes, helping law enforcement agencies to respond swiftly and effectively.</p>
            </div>
            <div className="section mission">
                <h2>Our Mission</h2>
                <p>Our mission is to leverage technology to reduce crime rates and improve public safety. By providing a user-friendly and accessible platform, we aim to encourage more people to report crimes and assist in the process of law enforcement.</p>
            </div>
            <div className="section team">
                <h2>Team</h2>
                <p>Our team is comprised of dedicated professionals from the fields of computer science, law enforcement, and public administration. Together, we work tirelessly to maintain and improve the Crime Reporting System.</p>
            </div>
            <div className="section contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or need assistance, please do not hesitate to contact us at crimesupport@crimereporting.com.</p>
            </div>
        </div>
    );
};

export default About;
