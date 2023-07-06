import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { Favorite } from '../types';

type PageRequest = {
    symbol: string;
};

export const getFavoriteStock = ({ symbol }: PageRequest): Promise<Favorite> => {
    return axios.get(`/Users/${symbol}/favorite`);
};

type QueryFnType = typeof getFavoriteStock;

type UseFavoriteOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useFavoriteStock = ({ config, symbol }: UseFavoriteOptions = { symbol: '' }) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['favorite', symbol],
        queryFn: () => getFavoriteStock({ symbol }),
        keepPreviousData: true,
    });
};
