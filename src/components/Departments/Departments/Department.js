import React from 'react';
import { useParams } from 'react-router';
import './Department.css'

const Department = () => {
    const { detailsId } = useParams();
    return (
        <div>
            <h2>This is booking: {detailsId}</h2>
        </div>
    );
};

export default Department;