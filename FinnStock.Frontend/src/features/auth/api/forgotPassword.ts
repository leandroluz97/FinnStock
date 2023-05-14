import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type ForgotPasswordDto = {
    data: {
        email: string;
    };
};

export const forgotPassword = ({ data }: ForgotPasswordDto): Promise<any> => {
    return axios.post('/auth/RequestResetPassword', data);
};

type UseForgotPassword = {
    config?: MutationConfig<typeof forgotPassword>;
};

export const useForgotPassword = ({ config }: UseForgotPassword = {}) => {
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error Login', toasterConfig);
        },
        onSuccess: () => {
            toast.success('Error Forgot Password', toasterConfig);
        },
        ...config,
        mutationFn: forgotPassword,
    });
};
