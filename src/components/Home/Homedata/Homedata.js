import React from 'react';
import './Homedata.css';
import Service from '../../Service/Service';
import useService from '../../../hooks/useService';

const Homedata = () => {

    const [services] = useService();

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