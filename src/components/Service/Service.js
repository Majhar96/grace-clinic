import React from 'react';
import './Service.css'



const Service = (props) => {

    const { description, department, img, } = props.service;

    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="department" />
                    <div class="card-body">
                        <h5 class="card-title">{department}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;