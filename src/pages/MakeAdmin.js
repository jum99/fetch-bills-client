import React, { useState } from 'react';
// import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fetch-bills-server.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                }

            })
        e.preventDefault();
    }

    return (
        <div>
            <h1 className='fs-18 mb-8'>Make Admin</h1>
            <form onSubmit={handleAdminSubmit} className="form">
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    onBlur={handleOnBlur}
                    className='p-3'
                />
                <br />
                <button type="submit" className='regular-btn mt-5'>Submit</button>
            </form>
            
        </div>
    );
};

export default MakeAdmin;