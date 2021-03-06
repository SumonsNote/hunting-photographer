import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../Firebase/Firebase.init';
import Loading from '../ShareFiles/Loading';

const Register = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name})
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || updateError) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    return (
        <form onSubmit={handleRegister}>
            <section className="border-0">
                <div className=" d-flex align-items-center ">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <h2 className=" text-center mb-5">Create an account</h2>

                                        <div>

                                            <div className=" mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' placeholder='Your Name' required />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' placeholder='Your Email' required />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' placeholder='Your Password' required />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" name='confirm-password' placeholder='Confirm Password' required />

                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input onClick={() => setAgree(!agree)}
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3cg"
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in Terms of service
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button disabled={!agree} type="submit" className="btn btn-success btn-block btn-lg text-white">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold text-success text-decoration-none">Login here</Link></p>

                                        </div>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default Register;