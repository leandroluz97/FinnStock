import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';

export const ProtectedRoutes = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/app/:userId/*">
                    <Route path="dashboard" element={<p>Dashboard</p>} />
                    <Route path="order" element={<p>order</p>} />
                    <Route path="favorites" element={<p>Favorites</p>} />
                </Route>
            </Routes>
        </MainLayout>
    );
};
