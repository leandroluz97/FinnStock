import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';

export const AppRoutes = () => {
    const auth = true;
    // const commonRoutes = [{path: '/', element:}]

    const routes = publicRoutes;

    const element = useRoutes([...routes]);

    return element;
};

export default AppRoutes;
