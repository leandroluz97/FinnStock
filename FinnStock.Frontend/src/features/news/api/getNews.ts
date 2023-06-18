import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { News } from '../types';
import { Page, Pagination } from '../../../types/pagination';

export const getNews = (
    { pageNumber, pageSize }: Page = {
        pageNumber: 1,
        pageSize: 100,
    }
): Promise<Pagination<News>> => {
    return axios.get(`/Stocks/MarketNews?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

type QueryFnType = typeof getNews;

type UseNewsOptions = {
    config?: QueryConfig<QueryFnType>;
} & Page;

export const useNews = (
    { config, pageNumber, pageSize }: UseNewsOptions = {
        pageNumber: 1,
        pageSize: 100,
    }
) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['news', pageNumber, pageSize],
        queryFn: () => getNews({ pageNumber, pageSize }),
        keepPreviousData: true,
    });
};
