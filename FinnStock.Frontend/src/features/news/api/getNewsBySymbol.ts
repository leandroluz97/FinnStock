import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { News } from '../types';
import { Page, Pagination } from '../../../types/pagination';

type getNewsBySymbol = {
    symbol: string;
} & Page;

export const getNewsBySymbol = ({
    pageNumber,
    pageSize,
    symbol,
}: getNewsBySymbol): Promise<Pagination<News>> => {
    return axios.get(
        `/Stocks/${symbol}/company-news?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
};

type QueryFnType = typeof getNewsBySymbol;

type UseNewsOptions = {
    config?: QueryConfig<QueryFnType>;
    symbol: string;
} & Page;

export const useNews = (
    { config, pageNumber, pageSize, symbol }: UseNewsOptions = {
        pageNumber: 1,
        pageSize: 100,
        symbol: '',
    }
) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['news', symbol, pageNumber, pageSize],
        queryFn: () => getNewsBySymbol({ pageNumber, pageSize, symbol }),
        keepPreviousData: true,
    });
};
