import React from 'react';
import img from '../../Images/About.jpg';
import './About.css'


const About = () => {




    return (
        <div>
            <h1 className="heading">ABOUT US</h1>
            <div className="aboutStyle">
                <div>
                    <img className="imageStyle" src={img} alt="biotechnology" />
                </div>
                <div className="aboutMessage">
                    <h2>Grace Clinic LTD</h2>
                    <br />
                    <h4>
                        Grace Clinic Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Grace Clinic is one of the ventures of Grace Group which is the top business group of the country.

                        The reputation of grace Clinic is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Grace Clinic strives to meet patients’ standards through quality healthcare and making a difference in their lives.

                    </h4><br /><br />
                    <h1>Mission</h1>
                    <ul>
                        <li>Adhering to high ethical and moral standards at all times.</li>
                        <li>Making service quality top priority in all we do.</li>
                        <li>Training staff to work within a quality care environment.</li>
                        <li>Providing quality health care service in all processes.</li>
                        <li>Delivering customer satisfaction through quality service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default About;