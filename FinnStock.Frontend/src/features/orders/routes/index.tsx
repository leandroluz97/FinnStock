import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SellOrders } from './SellOrders';
import { BuyOrders } from './BuyOrders';
import { NotFound } from '../../misc/routes/NotFound';
import { Tab } from '../components/Tab';

export const OrdersRoutes = () => {
    return (
        <React.Fragment>
            <Tab />
            <Routes>
                <Route index element={<BuyOrders />} />
                <Route path="sell-orders" element={<SellOrders />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    );
};
