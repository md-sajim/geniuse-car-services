import React from 'react';
import "./Service.css"
import {useNavigate} from "react-router-dom"


const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate()
    const Detail = id => {
       navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => Detail(id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;