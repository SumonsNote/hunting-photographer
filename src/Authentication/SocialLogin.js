import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../Firebase/Firebase.init';
import facebook from '../Images/facebook.png'
import google from '../Images/google.png'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error1.message}</p>
            </div>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        <p>Loading...</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center py-2'>
                <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                <div className='px-2'>or</div>
                <div style={{ height: '1px' }} className='w-50 bg-success'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-light my-3 w-75'>
                    <img className='mx-2' style={{ width: '30px' }} src={google} alt="" />
                    <span>Continue With Google</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-light my-3 w-75'>
                    <img className='mx-2' style={{ width: '30px' }} src={facebook} alt="" />
                    <span>Continue With Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;