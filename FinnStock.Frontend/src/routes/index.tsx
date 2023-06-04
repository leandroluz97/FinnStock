import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import { ProtectedRoutes, protectedRoutes } from './protected';
import { PublicRoutes, publicRoutes } from './public';

export const AppRoutes = () => {
    const auth = true;
    // const commonRoutes = [{path: '/', element:}]

    const routes = auth ? publicRoutes : protectedRoutes;

    const element = useRoutes([...routes]);

    return <React.Fragment>{element}</React.Fragment>;

    // return auth ? <PublicRoutes /> : <ProtectedRoutes />;
    // return <PublicRoutes />;
};

export default AppRoutes;
