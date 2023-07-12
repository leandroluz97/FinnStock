import { Route, Routes } from 'react-router-dom';
import { News } from './News';
import { NotFound } from '../../misc/routes/NotFound';

export const NewsRoutes = () => {
    return (
        <Routes>
            <Route index element={<News />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
