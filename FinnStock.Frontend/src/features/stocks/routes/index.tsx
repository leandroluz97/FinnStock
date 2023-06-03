import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Stocks } from './Stocks';
import { NotFound } from '../../misc/routes/NotFound';
import { Breadcrumb } from '../../../components/Elements/Breadcrumb';
import { Tab } from '../../../components/Elements/Tab';

export const StocksRoutes = () => {
    return (
        <React.Fragment>
            {/* <Breadcrumb /> */}
            <Tab />
            <Routes>
                <Route index element={<Stocks />} />
                <Route path="favorite" element={<p>Favorites</p>} />
                <Route path="up" element={<p>Up</p>} />
                <Route path="down" element={<p>Down</p>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    );
};
