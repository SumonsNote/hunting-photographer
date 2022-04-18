import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../Firebase/Firebase.init';
import Loading from './Loading';
import CustomLink from './CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        <p className='text-danger'>Error: {error}</p>
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparentgit container">
            <div className="container-fluid ">
                <Link style={{ letterSpacing: '4px' }} className="navbar-brand text fs-3 text-uppercase" to='/'>
                    Hunting Photographer
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <div className='navbar-nav'>
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <CustomLink className="nav-link active" aria-current="page" to='/home'>Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link ms-3" to='/services'>Services</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link ms-3" to='/blogs'>Blogs</CustomLink>
                        </li>
                        <li>
                            <CustomLink className="nav-link ms-3" to='/about'>About</CustomLink>
                        </li>
                        {
                            user ? 
                            <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign out</button> :
                            <CustomLink className="nav-link ms-3" to='/login'>Login</CustomLink>}
                    </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;