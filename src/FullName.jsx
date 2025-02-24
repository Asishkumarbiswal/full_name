import React, { useState } from 'react';

const FullName = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [fullName, setFullName] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastError, setLastError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstError && !lastError) {
            setFullName(first + " " + last);
        }
    }

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        if (value.split('').every(char => char.toLowerCase() !== char.toUpperCase())) {
            setFirst(value);
            setFirstError('');
        } else {
            setFirstError('First name should contain only alphabets.');
        }
    }

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        if (value.split('').every(char => char.toLowerCase() !== char.toUpperCase())) {
            setLast(value);
            setLastError('');
        } else {
            setLastError('Last name should contain only alphabets.');
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Full Name Display</h2>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={first} onChange={handleFirstNameChange} required />
            {firstError && <p style={{color: 'red'}}>{firstError}</p>}
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={last} onChange={handleLastNameChange} required />
            {lastError && <p style={{color: 'red'}}>{lastError}</p>}
            <br/>
            <button type="submit" disabled={firstError || lastError}>Submit</button>
        </form>
        {
            fullName && <p>Full Name: {fullName}</p>
        }
        </>
    );
}

export default FullName;