import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    return (
        <div>
            <section className="border-0">
                <div className=" d-flex align-items-center ">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <h2 className=" text-center mb-5">Create an account</h2>

                                        <form>

                                            <div className=" mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' placeholder='Your Name' />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' placeholder='Your Email' />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' placeholder='Your Password' />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" name='password' placeholder='Confirm Password' />

                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3cg"
                                                />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in Terms of service
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg text-white">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold text-success text-decoration-none">Login here</Link></p>

                                        </form>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;