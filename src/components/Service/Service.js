import React from 'react';
import './Service.css'



const Service = (props) => {

    const { description, department, img, } = props.service;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 service ">
                    <img className="card-img" src={img} alt="department" />
                    <h3>{department}</h3>
                    <p>{description}</p>

                </div>
            </div>
        </div>

    );
};

export default Service;