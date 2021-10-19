import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../Images/favicon.ico'
import './HeaderNav.css'

const HeaderNav = () => {
    return (

        <div>
            <ul className="nav nav-tabs m-4 b-5">
                <img className="image ms-3" src={icon} alt="hospitalIcon" />
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to>Find A Doctor</Link>
                </li>
                <button className="btn btn-outline-info btn-regular my-2 my-sm-0 " type="submit">Log In</button>

            </ul>

        </div>
    );
};

export default HeaderNav;