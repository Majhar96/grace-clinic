import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner.jpg';
import banner2 from '../../../Images/banner/banner-2.jpg';
import banner3 from '../../../Images/banner/banner-3.png';


const Banner = () => {

    // slide style
    const carouselsStyle = {
        width: '100%',
        marginTop: '30px',
        marginBottom: '30px',
        opacity: '.7'
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
    );
};

export default Banner;