import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import auth from './../Firebase/Firebase.init';
import Loading from '../ShareFiles/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef([])
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );

      const handleSignIn = (e) => {
        e.preventDefault()
       const email = e.target.email.value;
       const pass = e.target.password.value;
       signInWithEmailAndPassword(email, pass)
      }

      const resetPassword = async () => {       
            const email = emailRef.current.value;
            if(email){
                await sendPasswordResetEmail(email)
                toast('Email sent')
            }
            else {
                toast('Enter valid email')
            }
      }

      let errorElement;

      if (error || resetError) {
          errorElement =
              <div>
                  <p className='text-danger'>Error: {error?.message}</p>
              </div>
  
      }
  
      if (loading || sending) {
          return <Loading></Loading>
      }
  
      if (user) {
          navigate(from, { replace: true });
      }
    return (
        <div className='container w-25'>
        <h2 className='py-3'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-outline mb-4">
                    <input type="email" name='email' id="form2Example1" className="form-control" ref={emailRef} placeholder='Your Email' />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" name='password' id="form2Example2" className="form-control" placeholder='Your Password' />
                </div>

                <div className="row mb-4 d-flex align-items-center">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <button type='button' onClick={resetPassword} className='btn btn-link text-decoration-none text-success'>Forgot password?</button>
                        <ToastContainer />
                    </div>
                </div>
                {errorElement}
                <button type="submit" className="btn btn-success btn-block mb-4">Login</button>

                <div className="text-center">
                    <p>Not a member? <Link to='/register' className='text-success text-decoration-none'>Register</Link></p>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;