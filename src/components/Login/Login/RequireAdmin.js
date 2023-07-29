import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const RequireAdmin = ({ children }) => {
    const { user, admin } = useAuth();
    const location = useLocation();

    // if (user?.email && admin) {
    //     return children;
    // }
    // return <Navigate to="/" state={{ from: location }} replace ></Navigate>;

    if (!user || !admin) {

        return <Navigate to="/" ></Navigate>
    }
    return children;
};

export default RequireAdmin;