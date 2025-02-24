import React, { useState } from 'react';

const FullName = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(first + " " + last);
    }

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setFirst(value);
        }
    }

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setLast(value);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Full Name Display</h2>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={first} onChange={handleFirstNameChange} required />
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={last} onChange={handleLastNameChange} required />
            <br/>
            <button type="submit">Submit</button>
        </form>
        {
            fullName && <p>Full Name: {fullName}</p>
        }
        </>
    );
}

export default FullName;