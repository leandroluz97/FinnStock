import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { NotFound } from '../features/misc/routes/NotFound';
import { Card } from '../components/Elements/Card';
import { Breadcrumb } from '../components/Elements/Breadcrumb';
import { Tab } from '../components/Elements/Tab';

export const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route path="/u/:userId/*" element={<MainLayout />}>
                {/* <Route path="dashboard" element={<p>Dashboard</p>} /> */}
                <Route
                    path="dashboard"
                    element={
                        <React.Fragment>
                            {/* <Breadcrumb /> */}
                            <Tab />
                            <Card currency="USD" description="Microsoft" symbol="MSDT" />
                        </React.Fragment>
                    }
                />
                <Route path="news" element={<p>News</p>} />
                <Route path="orders" element={<p>Orders</p>} />
                <Route path="settings" element={<p>Settings</p>} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
