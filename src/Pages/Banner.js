import React from 'react';
import banner from '../Images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <div className='banner-button'>
                <a href="https://willbl.com" target='_blank'><button>Explore Photographers</button>
                </a><a href="https://willbl.com/projects" target='_blank'><button>Explore Photographs</button></a>
            </div>
        </div>
    );
};

export default Banner;