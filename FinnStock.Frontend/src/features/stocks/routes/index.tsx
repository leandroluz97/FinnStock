import { Route, Routes } from 'react-router-dom';
import { Stocks } from './Stocks';
import { NotFound } from '../../misc/routes/NotFound';
import { Tab } from '../../../components/Elements/Tab';
import { FavoriteStocks } from './FavoriteStocks';
import { EmptyState } from '../../../components/States/EmptyState';
import { StockProfile } from './StockProfile';

export const StocksRoutes = () => {
    return (
        <Routes>
            <Route element={<Tab />}>
                <Route index element={<Stocks />} />
                <Route path="favorite" element={<FavoriteStocks />} />
                <Route path="up" element={<EmptyState />} />
                <Route path="down" element={<EmptyState />} />
            </Route>
            <Route path=":symbol" element={<StockProfile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
