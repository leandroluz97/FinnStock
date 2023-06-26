import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { SellOrder } from '../types';

type IGetSellOrders = { userId: string };
export const getSellOrders = ({ userId }: IGetSellOrders): Promise<SellOrder[]> => {
    return axios.get(`/Users/${userId}/SellOrders`);
};

type QueryFnType = typeof getSellOrders;

type UseSellOrderOptions = {
    config?: QueryConfig<QueryFnType>;
    userId: string;
};

export const useSellOrders = ({ config, userId }: UseSellOrderOptions = { userId: '' }) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['sellOrders'],
        queryFn: () => getSellOrders({ userId }),
        keepPreviousData: true,
    });
};
