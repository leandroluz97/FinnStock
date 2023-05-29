import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { NotFound } from '../features/misc/routes/NotFound';
import { Card } from '../features/stocks/components/Card';
import { Breadcrumb } from '../components/Elements/Breadcrumb';
import { Tab } from '../components/Elements/Tab';
import { StocksList } from '../features/stocks/components/stocksList';

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
                            <StocksList />
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
