import React, { useState} from 'react';

const FullName = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(first + " " + last);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Full Name Display</h2>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={first} onChange={(e) => setFirst(e.target.value)} required />
            <br/>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={last} onChange= {(e) => setLast(e.target.value)} required />
            <br/>
            <button type="submit">Submit</button>
        </form>
        {
            fullName && <p>Full Name : {fullName}</p>
        }
        </>
    );
}

export default FullName;