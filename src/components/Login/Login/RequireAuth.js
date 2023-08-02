import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    if (!user?.email) {
        return <Navigate to="/" state={{ from: location }} replace ></Navigate>
    }
   
    return children;
};

export default RequireAuth;