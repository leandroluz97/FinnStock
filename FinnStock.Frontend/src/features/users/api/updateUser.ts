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
        onError: (err: any) => {
            toast.error(err.data.description, toasterConfig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('user');
            toast.success('User updated successful', toasterConfig);
        },
        ...config,
        mutationFn: updateUser,
    });
};
