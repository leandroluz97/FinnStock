import React, { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorFallback } from '../components/Error';
import { queryClient } from '../lib/react-query';
import { Loading } from '../components/Loading';
import { AuthProvider } from '../lib/auth';
import { URLSearch, urlQueries } from '../utils/URLSearch';

URLSearch.register(urlQueries);
interface IPropsAppProvider {
    children: ReactNode;
}

export const AppProvider = ({ children }: IPropsAppProvider) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HelmetProvider>
                <React.Suspense fallback={<Loading />}>
                    <QueryClientProvider client={queryClient}>
                        <ToastContainer />
                        <AuthProvider>
                            <Router>{children}</Router>
                        </AuthProvider>
                    </QueryClientProvider>
                </React.Suspense>
            </HelmetProvider>
        </ErrorBoundary>
    );
};
