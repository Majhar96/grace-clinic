import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './HeaderNav.css'

const HeaderNav = () => {

    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <ul className="nav nav-tabs m-4 b-5">

                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/details">Departments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/doctors">Find A Doctor</Link>
                    </li>

                    <li className="nav-item login">
                        <Link className="nav-link text-info " to="/login">Log In</Link>
                    </li>
                    <span className="mt-2">{user.displayName}</span>
                    {user?.email && <button onClick={logout} className="mb-1 ms-2 text-danger ">Log out</button>}

                </ul>

            </div>
        </nav>
    );
};

export default HeaderNav;