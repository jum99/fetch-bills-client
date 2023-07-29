import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Layout from '../../shared/Layout';

const RequireAuth = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    
    // if (!user?.email) {
    //     return <Navigate to="/" state={{ from: location }} replace ></Navigate>
    // }
    if (!user?.email) {
        return <Navigate to="/" ></Navigate>
    }

    return children;
};

export default RequireAuth;