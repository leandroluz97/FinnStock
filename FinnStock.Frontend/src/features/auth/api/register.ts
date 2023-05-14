import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type RegisterDto = {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        password: string;
    };
};

export const register = ({ data }: RegisterDto): Promise<any> => {
    return axios.post('/auth/register', data);
};

type UseRegister = {
    config?: MutationConfig<typeof register>;
};

export const useRegister = ({ config }: UseRegister = {}) => {
    return useMutation({
        onMutate: async (newAuth) => {
            // await queryClient.cancelQueries('auth');
            // const previousAuth = queryClient.getQueriesData('auth');
            // queryClient.setQueriesData('auth', { ...previousAuth, newAuth });
            // return { previousAuth };
        },
        onError: (_, __, context: any) => {
            if (context?.previousAuth) {
                queryClient.setQueriesData('auth', context.previousAuth);
            }
            toast.error('Error Register', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('auth');
        },
        ...config,
        mutationFn: register,
    });
};
