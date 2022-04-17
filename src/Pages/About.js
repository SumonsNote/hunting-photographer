import React from 'react';
import profile from '../Images/profile.jpg'

const About = () => {
    return (
        <div className='py-5'>
            <div className="row mx-auto container">
                <div className='col-6'>
                    <img style={{ width: '400px' }} src={profile} alt="" />
                    <p className='py-3'>Will Burrard-Lucas</p>
                </div>
                <div className='col-6'>
                    <h2 className='fs-3 text-uppercase py-2'>mission and goals</h2>
                    <div className='border-bottom border-2 bg bg-success w-25 ms-auto container mb-3'></div>
                    <p>Provide a resource for learning about nature photography, art and great places to visit and photograph Nature both in Canada and around the world. Get inspired - we will introduce you to a variety of different nature photographer-artists both professional and amateur. We will provide tips and how to articles to help you get the most out of your camera and how to use various software programs. We welcome all types of photography articles from pin-hole cameras, large-format, black and white, film, traditional darkroom and digital manipulation</p>
                </div>
            </div>
            <div className='py-5'>
                <h2 className='py-3'>Get News Letter</h2>
                <div className='d-flex justify-content-between align-content-center container w-25'>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />
                    <button className='btn btn-success border-0'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default About;