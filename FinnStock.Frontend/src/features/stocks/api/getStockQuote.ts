import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { Quote } from '../types';

type PageRequest = {
    symbol: string;
};

export const getStockQuote = ({ symbol }: PageRequest): Promise<Quote> => {
    return axios.get(`/Stocks/${symbol}/quote`);
};

type QueryFnType = typeof getStockQuote;

type UseStockQuoteOptions = {
    config?: QueryConfig<QueryFnType>;
} & PageRequest;

export const useStockQuote = ({ config, symbol }: UseStockQuoteOptions = { symbol: '' }) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['quote', symbol],
        queryFn: () => getStockQuote({ symbol }),
        keepPreviousData: true,
    });
};
