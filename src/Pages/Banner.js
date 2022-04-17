import React from 'react';
import banner from '../Images/home-page.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <div className='banner-button'>
                <button>Explore Photographers</button>
                <button>Explore Photographs</button>
            </div>
        </div>
    );
};

export default Banner;