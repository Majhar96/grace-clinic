import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'



const Service = (props) => {

    const { description, department, img, id } = props.service;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 service ">
                    <img className="card-img" src={img} alt="department" />
                    <h3>{department}</h3>
                    <p>{description}</p>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-info text-black">{department} Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Service;