import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { FavoriteStock } from '../types';

type PageRequest = {
    userId: string;
};

export const getFavoriteStocks = ({ userId }: PageRequest): Promise<FavoriteStock[]> => {
    return axios.get(`/Users/${userId}/Favorites`);
};

type QueryFnType = typeof getFavoriteStocks;

type UseFavoriteStocksOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useFavoriteStocks = (
    { config, userId }: UseFavoriteStocksOptions = { userId: '' }
) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['favorite', userId],
        queryFn: () => getFavoriteStocks({ userId }),
        keepPreviousData: true,
    });
};
