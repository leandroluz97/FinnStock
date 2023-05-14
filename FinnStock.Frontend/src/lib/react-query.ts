import { AxiosError } from 'axios';
import { DefaultOptions, QueryClient, UseMutationOptions, UseQueryOptions } from 'react-query';

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry: false,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<T extends (...args: any) => any> = Promise<ReturnType<T>>;

export type QueryConfig<T extends (...args: any) => any> = Omit<
    UseQueryOptions<ExtractFnReturnType<T>>,
    'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
>;
