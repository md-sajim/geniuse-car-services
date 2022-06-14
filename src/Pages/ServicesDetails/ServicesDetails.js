import React from 'react';
import {useParams} from 'react-router-dom'

const ServicesDetails = () => {
    const {serviceid} = useParams()
    return (
        <div>
            <h1>ServicesDetails {serviceid}</h1>
        </div>
    );
};

export default ServicesDetails;