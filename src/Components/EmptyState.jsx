import React from 'react';
import { NavLink } from 'react-router';

const EmptyState = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-3xl font-bold'>You Have not Booked any appointment yet</h1>
            <p className='text-gray-500 mt-4 mb-3'>Our platform connects you with verified, experienced doctors across various specialties -- all at your convenience.</p>
            <NavLink to='/'><p className="btn btn-primary text-white">Book an Appointment</p></NavLink>
        </div>
    );
};

export default EmptyState;