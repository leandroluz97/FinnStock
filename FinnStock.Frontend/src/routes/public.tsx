import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoutes } from '../features/auth/routes';

// export const publicRoutes = [
//     {
//         path: '/auth/*',
//         element: <AuthRoutes />,
//     },
// ];

export const PublicRoutes = () => {
    return <AuthRoutes />;
};
