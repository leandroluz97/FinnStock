import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type createBuyOrderDto = {
    data: {
        logo: string;
        amount: number;
        quantity: number;
        symbol: number;
        userId: string;
    };
};

export type createBuyOrderResponseDto = {
    userId: string;
};

export const createBuyOrder = ({ data }: createBuyOrderDto): Promise<any> => {
    return axios.post(`/Users/${data.userId}/BuyOrders`, data);
};

type UseBuyOrder = {
    config?: MutationConfig<typeof createBuyOrder>;
};

export const useCreateBuyOrder = ({ config }: UseBuyOrder = {}) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error on Buy Order', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('buyOrders');
            toast.success('Order bought successful ', toasterConfig);
        },
        ...config,
        mutationFn: createBuyOrder,
    });
};
