import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Stocks } from './Stocks';
import { NotFound } from '../../misc/routes/NotFound';
import { Tab } from '../../../components/Elements/Tab';
import { FavoriteStocks } from './FavoriteStocks';
import { EmptyState } from '../../../components/States/EmptyState';

export const StocksRoutes = () => {
    return (
        <React.Fragment>
            <Tab />
            <Routes>
                <Route index element={<Stocks />} />
                <Route path="favorite" element={<FavoriteStocks />} />
                <Route path="up" element={<EmptyState />} />
                <Route path="down" element={<EmptyState />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    );
};
