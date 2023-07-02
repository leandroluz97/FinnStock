import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type createSellOrderDto = {
    data: {
        logo: string;
        amount: number;
        quantity: number;
        symbol: number;
        userId: string;
    };
};

export type createSellOrderResponseDto = {
    userId: string;
};

export const createSellOrder = ({ data }: createSellOrderDto): Promise<any> => {
    return axios.post(`/Users/${data.userId}/SellOrders`, data);
};

type UseSellOrder = {
    config?: MutationConfig<typeof createSellOrder>;
};

export const useCreateSellOrder = ({ config }: UseSellOrder = {}) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error on Buy Order', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('sellOrders');
            toast.success('Order sold successful ', toasterConfig);
        },
        ...config,
        mutationFn: createSellOrder,
    });
};
