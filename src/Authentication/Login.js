import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div className='container w-25'>
        <h2 className='py-3'>Login</h2>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" placeholder='Your Email' />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" placeholder='Your Password' />
                </div>

                <div className="row mb-4 d-flex align-items-center">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <button className='btn btn-link text-decoration-none text-success'>Forgot password?</button>
                    </div>
                </div>

                <button type="button" className="btn btn-success btn-block mb-4">Login</button>

                <div className="text-center">
                    <p>Not a member? <Link to='/register' className='text-success text-decoration-none'>Register</Link></p>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;