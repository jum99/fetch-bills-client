import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Login/Login.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {  registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert(`Your password didn't match`);
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <h1 className='mt-5'>Register</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit} className='login-form' >
                <input
                    type="text"
                    placeholder='Your Name'
                    name='name'
                    onBlur={handleOnBlur}
                />
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
                <input
                    type="password"
                    placeholder='Confirm Password'
                    name='password2'
                    onBlur={handleOnBlur}
                />

                <button type="submit" className='submit-btn'>Register</button>
                <Link style={{ textDecoration: 'none', fontSize: '16px', marginTop: '10px' }} to="/" >
                    Already registered? Please Login
                </Link>
            </form>}
        </div>
    );
};

export default Register;