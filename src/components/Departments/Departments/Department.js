import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './Department.css'

const Department = () => {
    const { detailsId } = useParams();
    useEffect(() => {
        const url = ``
    })
    return (
        <div>
            <h2>This is details: {detailsId}</h2>
        </div>
    );
};

export default Department;