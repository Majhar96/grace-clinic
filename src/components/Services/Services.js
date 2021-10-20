import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services] = useService();

    return (
        <div >
            <h2 className="service-heading">Departments We Have</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
