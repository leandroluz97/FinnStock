import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { useAuth } from '../lib/auth';

export const AppRoutes = () => {
    const { user } = useAuth();

    const routes = user ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes]);

    return <React.Fragment>{element}</React.Fragment>;

    // return auth ? <PublicRoutes /> : <ProtectedRoutes />;
    // return <PublicRoutes />;
};

export default AppRoutes;
