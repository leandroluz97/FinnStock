import React, { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { NotFound } from '../features/misc/routes/NotFound';
import { StocksRoutes } from '../features/stocks/routes';
import { Spinner } from '../components/Elements';

export const App = () => {
    return (
        <MainLayout>
            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <Spinner />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};

export const protectedRoutes = [
    {
        path: '/u/:userId',
        element: <App />,
        children: [
            { path: 'stocks/*', element: <StocksRoutes /> },
            { path: 'news/*', element: <p>News</p> },
            { path: 'orders/*', element: <p>Orders</p> },
            { path: 'settings/*', element: <p>Settings</p> },
            { path: '*', element: <NotFound /> },
        ],
    },
];
