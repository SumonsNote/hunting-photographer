import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBlog } from 'react-icons/fa';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className=' py-4 bg bg-dark'>
            <div className='d-flex justify-content-between container align-items-center'>
                <span className='text-white'>Copyright © 2004-{year} Will Burrard-Lucas | Privacy Policy | Usage Terms.</span>
                <nav className='text-white fs-4 d-flex list-unstyled'>
                    <li className='me-2'><FaFacebook /></li>
                    <li className='me-2'><FaInstagram /></li>
                    <li className='me-2'><FaTwitter /></li>
                    <li><FaBlog /></li>
                </nav>
            </div>
        </div>
    );
};

export default Footer;