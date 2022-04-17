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

    if(loading) {
        return <Loading></Loading>
    }
    if(error) {
        <p className='text-danger'>Error: {error}</p>
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-light container sticky-top">
            <div className="container-fluid">
                <Link style={{letterSpacing: '4px'}} className="navbar-brand text fs-3 text-uppercase" to='/'>Hunting Photographer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <CustomLink className="nav-link active" aria-current="page" to='/home'>Home</CustomLink>
                    <CustomLink className="nav-link ms-3" to='/services'>Services</CustomLink>
                        <CustomLink className="nav-link ms-3" to='/blogs'>Blogs</CustomLink>
                        <CustomLink className="nav-link ms-3" to='/about'>About</CustomLink>
                        {
                            user ? 
                            <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign out</button> :
                            <CustomLink className="nav-link ms-3" to='/login'>Login</CustomLink>}
                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;