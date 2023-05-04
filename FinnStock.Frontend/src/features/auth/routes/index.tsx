import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './Signup';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="signup" element={<Signup />} />
        </Routes>
    );
};
