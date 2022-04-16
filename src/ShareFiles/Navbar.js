import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../Firebase/Firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <Link className="navbar-brand text fs-3 text-uppercase " to='/'>Hunting Photographer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                    <Link className="nav-link ms-3" to='/services'>Services</Link>
                        <Link className="nav-link ms-3" to='/blogs'>Blogs</Link>
                        <Link className="nav-link ms-3" to='/about'>About</Link>
                        {
                            user ? 
                            <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign out</button> :
                            <Link className="nav-link ms-3" to='/login'>Login</Link>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;