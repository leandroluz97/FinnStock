import { useMutation } from 'react-query';
import { axios } from '../../../lib/axios';
import { queryClient } from '../../../lib/react-query';

export type RegisterDto = {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        password: string;
    };
};

export const register = ({ data }: RegisterDto): Promise<unknown> => {
    return axios.post('/auth/register', data);
};

export const useRegister = ({ config }: any = {}) => {
    return useMutation({
        onMutate: async (newAuth) => {
            await queryClient.cancelQueries('auth');
            const previousAuth = queryClient.getQueriesData('auth');
            queryClient.setQueriesData('auth', { ...previousAuth, newAuth });
            return { previousAuth };
        },
        onError: (error: any, variables: void, context: any) => {
            if (context?.previousAuth) {
                queryClient.setQueriesData('auth', context.previousAuth);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('auth');
        },
        ...config,
        mutationFn: register,
    });
};
