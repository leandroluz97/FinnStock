import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type UpdateUserDto = {
    data: {
        email: string;
        firstName: string;
        lastName: string;
        birthDate: string;
        phoneNumber: string;
        id: string;
    };
};

export const updateUser = ({ data }: UpdateUserDto): Promise<any> => {
    return axios.put(`/Users/${data.id}`, data);
};

type UseUpdateUser = {
    config?: MutationConfig<typeof updateUser>;
};

export const useUpdateUser = ({ config }: UseUpdateUser = {}) => {
    return useMutation({
        onMutate: async ({ data }: UpdateUserDto) => {
            // await queryClient.cancelQueries('user');
            // const previousAuth = queryClient.getQueriesData('user');
            // queryClient.setQueriesData('user', { ...previousAuth, ...data });
            // return { previousAuth };
        },
        onError: (_, __, context: any) => {
            // if (context?.previousAuth) {
            //     queryClient.setQueriesData('user', context.previousAuth);
            // }
            toast.error('Error Register', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
            toast.success('User updated successful', toasterConfig);
        },
        ...config,
        mutationFn: updateUser,
    });
};
