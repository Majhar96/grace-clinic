import React from 'react';
import './Homedata.css'
import { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Homedata = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // taking four services

    const information = services.slice(1, 3);


    return (
        <div className="home-container mt-2 mb-2">
            <h2>Departments</h2>
            <div className="home-service-container">
                {
                    information.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Homedata;