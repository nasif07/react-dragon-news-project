import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRouter = ({ children }) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    if(loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if(user) {
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;