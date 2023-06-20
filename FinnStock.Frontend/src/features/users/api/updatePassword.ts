import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type UpdatePasswordDto = {
    userId: string;
    data: {
        currentPassword: string;
        newPassword: string;
    };
};

export const updatePassword = ({ data, userId }: UpdatePasswordDto): Promise<any> => {
    return axios.put(`/Users/${userId}/ChangePassword`, data);
};

type UseUpdatePassword = {
    config?: MutationConfig<typeof updatePassword>;
};

export const useUpdatePassword = ({ config }: UseUpdatePassword = {}) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error on updating password', toasterConfig);
        },
        onSuccess: (data) => {
            toast.success('Password updated successful', toasterConfig);
        },
        ...config,
        mutationFn: updatePassword,
    });
};
