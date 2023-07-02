import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { StockProfile } from '../types';

type PageRequest = {
    symbol: string;
};

export const getStockProfile = ({ symbol }: PageRequest): Promise<StockProfile> => {
    return axios.get(`/Stocks/${symbol}/profile`);
};

type QueryFnType = typeof getStockProfile;

type UseStockProfileOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useStockProfile = ({ config, symbol }: UseStockProfileOptions = { symbol: '' }) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['stock', symbol],
        queryFn: () => getStockProfile({ symbol }),
        keepPreviousData: true,
    });
};
