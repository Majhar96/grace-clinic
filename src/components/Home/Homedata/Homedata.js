import React from 'react';
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

    const information = services.slice(1, 5);

    // services heading style
    const servicesheadingStyle = {
        color: 'black',
        fontSize: '50px',
        letterSpacing: '8px',
        margin: '15px',
        fontFamily: 'cursive'
    }

    return (
        <div>
            <h1 style={servicesheadingStyle}>Some of our services</h1>
            <div xs={1} md={2} className="g-4">
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