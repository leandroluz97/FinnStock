import React from 'react';

import { AuthRoutes } from '../features/auth/routes';

export const publicRoutes = [
    {
        path: '/*',
        element: <AuthRoutes />,
    },
];
