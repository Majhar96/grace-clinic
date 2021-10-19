import React from 'react';
import img from '../../Images/404.jpg';

const NotFound = () => {

    const errorStyle = {
        display: 'flex',

    }

    // error message style
    const errorMassage = {
        display: 'flex',
        alignItems: 'center',
        color: 'rgb(252 140 39)',
        fontFamily: 'cursive'
    }


    // image style
    const imageStyle = {
        width: '90%',
        height: '500px',
        border: '1px solid lightblue',
        borderRadius: '50%'
    }

    return (
        <div style={errorStyle}>
            <div style={errorMassage}>
                <h1>Sorry!! PAGE NOT FOUND. <br />SEARCH VALID PAGE PLEASE!!</h1>
            </div>
            <div>
                <img style={imageStyle} src={img} alt="error" />
            </div>
        </div>
    );
};

export default NotFound;