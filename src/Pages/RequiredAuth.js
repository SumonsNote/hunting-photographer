import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../Firebase/Firebase.init';

const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    if(loading) {
        <p>Loading....</p>
    }
    if(!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;