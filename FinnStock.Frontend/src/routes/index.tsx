import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import { ProtectedRoutes } from './protected';
import { PublicRoutes } from './public';

export const AppRoutes = () => {
    const auth = false;
    // const commonRoutes = [{path: '/', element:}]

    // const routes = auth ? publicRoutes : ProtectedRoutes;

    // const element = useRoutes([...routes]);
    // const element = routes;

    return auth ? <PublicRoutes /> : <ProtectedRoutes />;
    return <PublicRoutes />;
};

export default AppRoutes;
