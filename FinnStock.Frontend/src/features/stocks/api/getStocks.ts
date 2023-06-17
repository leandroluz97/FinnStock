import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { Stock } from '../types';
import { Page, Pagination } from '../../../types/pagination';

export const getStocks = (
    { pageNumber, pageSize }: Page = { pageNumber: 1, pageSize: 100 }
): Promise<Pagination<Stock>> => {
    return axios.get(`/Stocks?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

type QueryFnType = typeof getStocks;

type UseStocksOptions = {
    config?: QueryConfig<QueryFnType>;
} & Page;

export const useStocks = (
    { config, pageNumber, pageSize }: UseStocksOptions = { pageNumber: 1, pageSize: 100 }
) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['stocks', pageNumber, pageSize],
        queryFn: () => getStocks({ pageNumber, pageSize }),
        keepPreviousData: true,
    });
};
