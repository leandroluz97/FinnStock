import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { NotFound } from '../features/misc/routes/NotFound';
import { StocksRoutes } from '../features/stocks/routes';
import { Spinner } from '../components/Loading/Spinner';
import { NewsRoutes } from '../features/news/routes';
import { UsersRoutes } from '../features/users/routes';
import { OrdersRoutes } from '../features/orders/routes';

export const App = () => {
    return (
        <MainLayout>
            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <Spinner />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};

export const protectedRoutes = [
    {
        path: '/u/:userId',
        element: <App />,
        children: [
            { path: 'stocks/*', element: <StocksRoutes /> },
            { path: 'news/*', element: <NewsRoutes /> },
            { path: 'orders/*', element: <OrdersRoutes /> },
            { path: 'settings/*', element: <UsersRoutes /> },
            { path: '*', element: <NotFound /> },
        ],
    },
];
