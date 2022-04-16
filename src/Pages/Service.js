import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service
    return (
        <div className='service-container container border border-1 m-3 p-3 rounded-1'>
            <h2 className='py-3 fs-4'>{name}</h2>
            <img src={img} alt=""/>
            <p className='py-4'>Price: {price}</p>
            <p>{description}</p>
            <Link to='/checkout' className='bg bg-success text-light p-2 border-0 rounded-2 text-decoration-none'>Checkout</Link>
        </div>
    );
};

export default Service;