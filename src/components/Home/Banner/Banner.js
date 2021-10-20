import React from 'react';
import banner from '../../../Images/banner/Banner-1.jpg'
import './Banner.css'

const Banner = () => {



    return (
        <div className=" mt-2">
            <img className="img-fluid" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;