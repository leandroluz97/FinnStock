import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';
import { BuyOrder } from '../types';

type IGeBuyOrders = { userId: string };
export const geBuyOrders = ({ userId }: IGeBuyOrders): Promise<BuyOrder[]> => {
    return axios.get(`/Users/${userId}/BuyOrders`);
};

type QueryFnType = typeof geBuyOrders;

type UseNewsOptions = {
    config?: QueryConfig<QueryFnType>;
    userId: string;
};

export const useBuyOrders = ({ config, userId }: UseNewsOptions = { userId: '' }) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['buyOrders'],
        queryFn: () => geBuyOrders({ userId }),
        keepPreviousData: true,
    });
};
