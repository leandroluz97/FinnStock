import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { Stock } from '../types';
import { Page, Pagination } from '../../../types/pagination';

type PageRequest = {
    searchText?: string;
} & Page;

export const getStocks = (
    { pageNumber, pageSize, searchText }: PageRequest = {
        pageNumber: 1,
        pageSize: 100,
    }
): Promise<Pagination<Stock>> => {
    if (searchText != null) {
        return axios.get(`/Stocks/Search?searchText=${searchText}`);
    }
    return axios.get(`/Stocks?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

type QueryFnType = typeof getStocks;

type UseStocksOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useStocks = (
    { config, pageNumber, pageSize, searchText }: UseStocksOptions = {
        pageNumber: 1,
        pageSize: 100,
    }
) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['stocks', pageNumber, pageSize, searchText],
        queryFn: () => getStocks({ pageNumber, pageSize, searchText }),
        keepPreviousData: true,
    });
};
