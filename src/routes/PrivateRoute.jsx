import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders.jsx';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className='progress w-60'></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;