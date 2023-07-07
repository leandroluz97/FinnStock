import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type addFavoriteDto = {
    data: {
        symbol: string;
        userId: string;
        description: string;
    };
};

export type addFavoriteResponseDto = {
    userId: string;
};

export const addFavorite = ({ data }: addFavoriteDto): Promise<any> => {
    return axios.post(`/Users/${data.userId}/Favorites`, data);
};

type UseAddFavorite = {
    config?: MutationConfig<typeof addFavorite>;
};

export const useAddFavorite = ({ config }: UseAddFavorite = {}) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error on Buy Order', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('favorite');
        },
        ...config,
        mutationFn: addFavorite,
    });
};
