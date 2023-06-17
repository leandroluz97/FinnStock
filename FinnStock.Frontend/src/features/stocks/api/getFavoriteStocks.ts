import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { FavoriteStock } from '../types';
import { Page, Pagination } from '../../../types/pagination';

type PageRequest = {
    userId: string;
};

export const getFavoriteStocks = ({ userId }: PageRequest): Promise<FavoriteStock[]> => {
    return axios.get(`/Users/${userId}/Favorites`);
};

type QueryFnType = typeof getFavoriteStocks;

type UseStocksOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useFavoriteStocks = ({ config, userId }: UseStocksOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['favorite', userId],
        queryFn: () => getFavoriteStocks({ userId }),
        keepPreviousData: true,
    });
};
