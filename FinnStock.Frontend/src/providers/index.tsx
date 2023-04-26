import React, { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';

import { ErrorFallback } from '../components/error';
import { queryClient } from '../lib/react-query';
import { Loading } from '../components/loading';

interface IPropsAppProvider {
    children: ReactNode;
}

export const AppProvider = ({ children }: IPropsAppProvider) => {
    return (
        <React.Suspense fallback={<Loading />}>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
            </QueryClientProvider>
        </React.Suspense>
    );
};
