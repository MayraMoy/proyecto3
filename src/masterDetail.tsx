import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        city: string;
        street: string;
        suite: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    company: {
        name: string;
        catchPhase: string;
        bs: string;
    }
}

function MasterDetail() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data: User[]) => setUsers(data));
    }, []);
    
    return (
    <div
    style={{
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        background: '#a0bed8',
        minHeight: '100vh',
        padding: '16px',
        fontFamily: 'Poppins, sans-serif',
    }}
    >
        {/* Master View */}
        <ul
        style={{
            width: window.innerWidth < 768 ? '100%' : '40%',
            borderRight: window.innerWidth < 768 ? 'none' : '1px solid #ccc',
            margin: 0,
            padding: 0,
            listStyle: 'none',
        }}
        >
            {users.map(user => (
                <li
                key={user.id}
                onClick={() => setSelectedUser(user)}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#5198ad';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor =
                    selectedUser?.id === user.id ? '#0d7688' : 'transparent';
                }}
                style={{
                    cursor: 'pointer',
                    padding: '12px 16px',
                    backgroundColor:
                    selectedUser?.id === user.id ? '#0d7688' : 'transparent',
                    fontWeight: selectedUser?.id === user.id ? 'bold' : 'normal',
                    transition: 'background 0.3s ease',
                }}
                >
                    {user.name}
                </li>
            ))}
        </ul>

        {/* Detail View */}
        <div
        style={{
            width: window.innerWidth < 768 ? '100%' : '60%',
            padding: '16px',
        }}
        >
            {selectedUser ? (
                <div
                style={{
                    background: '#0d7688',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: '24px',
                    transition: 'all 0.3s ease-in-out',
                }}
                >
                    <h2 style={{ fontSize: '24px', marginBottom: '12px', color: '#fcfcfc' }}>
                        {selectedUser.name}
                    </h2>
                    <p style={{ marginBottom: '8px', color: '#fcfcfc' }}>
                        <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p style={{ marginBottom: '8px' , color: '#fcfcfc'}}>
                        <strong>Phone:</strong> {selectedUser.phone}
                    </p>
                    <p style={{ marginBottom: '8px', color: '#fcfcfc' }}>
                    <strong>Website:</strong> {selectedUser.website}
                    </p>
                    <p style={{ marginBottom: '8px', color: '#fcfcfc' }}>
                        <strong>City:</strong> {selectedUser.address.city}
                    </p>
                </div>
                ) : (
                <p style={{ fontStyle: 'italic', color: '#000000' }}>
                    Select a user to see details
                </p>
            )}
        </div>
    </div>
    );
}

export default MasterDetail;
