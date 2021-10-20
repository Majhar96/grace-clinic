import React from 'react';
import { Link } from 'react-router-dom';
import './Covid19.css'

const Covid19 = () => {
    return (
        <div className="covid-container  mt-3 p-4">
            <h1>Covid-19 Vaccine Information</h1>
            <div className="vaccine-container">
                <div>
                    <h3>Vaccination options for Mayo Clinic patients</h3>
                    <br />
                    <h6>COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to Mayo Clinic campuses:</h6>
                    <br />
                    <ul>
                        <li ><Link className="list">Dhaka</Link></li>
                        <li ><Link className="list">Chittagong</Link></li>
                        <li ><Link className="list">Cumilla</Link></li>
                        <li><Link className="list">Rongpur</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Not a Mayo Clinic patient?</h3>
                    <br />
                    <h6>If you're not a Mayo Clinic patient, check your public health department's website for the most complete information.</h6>
                    <br />
                    <input type="check" name="check" placeholder />
                </div>
            </div>
        </div>
    );
};

export default Covid19;