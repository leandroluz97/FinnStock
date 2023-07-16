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
        onError: (err: any) => {
            toast.error(err.data.description, toasterConfig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('favorite');
        },
        ...config,
        mutationFn: deleteFavoriteStock,
    });
};
