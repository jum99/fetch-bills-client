import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    return (
        <div className='text-center mt-5'>
            <h1>Login</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit} className='login-form' >
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    onBlur={handleOnBlur}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    onBlur={handleOnBlur}
                />

                <button type="submit" className='submit-btn'>Login</button>
                <Link style={{ textDecoration: 'none', fontSize: '16px', marginTop: '10px' }} to="/register" >
                    New user? Please Register
                </Link>
            </form>}
            <p>-------------------------------</p>

            <button onClick={handleGoogleSignIn} className='submit-btn'>Google Sign In</button>

            {isLoading && <Spinner animation='border' variant='success' />}
            {user?.email && <Alert variant='success'>USER CREATED SUCCESSFULLY</Alert>}
            {authError && <Alert variant='danger'>{authError}</Alert>}

        </div>
    );
};

export default Login;