import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../Images/notfound.jpg'
const Page404 = () => {
    return (
        <div>
            <img className='py-5' src={notFound} alt=""/>
            <div>
            <Link to='/' className='btn btn-link bg bg-success text-white text-decoration-none text-uppercase'>go to home</Link>
            </div>
        </div>
    );
};

export default Page404;