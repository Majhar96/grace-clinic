import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner/banner.jpg';
import banner2 from '../../Images/banner/banner-2.jpg';
import banner3 from '../../Images/banner/banner-3.png';

import './About.css'


const About = () => {

    // slide style
    const carouselsStyle = {
        width: '100%',
        marginTop: '30px',
        opacity: '.7',
        height: '70%'
    }

    //  image style
    const imageStyle = {
        width: '800px',
        height: '550px'

    }

    // carousel text style
    const textStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'cursive'


    }


    return (
        <div>
            <Carousel style={carouselsStyle}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h1>Reliable Diagnosis History</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={textStyle}>
                        <h1>Expert Doctors in Every Department</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={textStyle}>
                        <h1>Patient Friendly Environment</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="aboutMessage">
                <h2>Grace Clinic LTD</h2>
                <br />
                <h6>
                    Grace Clinic Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Grace Clinic is one of the ventures of Grace Group which is the top business group of the country.

                    The reputation of grace Clinic is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Grace Clinic strives to meet patients’ standards through quality healthcare and making a difference in their lives.

                </h6><br /><br /><br />
                <h2>Mission</h2>
                <ul>
                    <li>Adhering to high ethical and moral standards at all times.</li>
                    <li>Making service quality top priority in all we do.</li>
                    <li>Training staff to work within a quality care environment.</li>
                    <li>Providing quality health care service in all processes.</li>
                    <li>Delivering customer satisfaction through quality service</li>
                </ul>
            </div>
        </div>

    );
};
export default About;