import { useMutation } from 'react-query';

import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

type PageRequest = {
    userId: string;
    favoriteId: string;
};

export const deleteFavoriteStock = ({ userId, favoriteId }: PageRequest): Promise<void> => {
    return axios.delete(`/Users/${userId}/Favorites/${favoriteId}`);
};

type QueryFnType = typeof deleteFavoriteStock;

type UseDelteFavoriteOptions = {
    config?: MutationConfig<QueryFnType>;
};

export const useDeleteFavoriteStock = ({ config }: UseDelteFavoriteOptions) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error on add as favorite', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('favorite');
            // toast.success('Order bought successful ', toasterConfig);
        },
        ...config,
        mutationFn: deleteFavoriteStock,
    });
};
