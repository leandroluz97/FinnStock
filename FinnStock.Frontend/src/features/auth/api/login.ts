import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type LoginDto = {
    data: {
        email: string;
        password: string;
    };
};

export const register = ({ data }: LoginDto): Promise<any> => {
    return axios.post('/auth/login', data);
};

type UseLogin = {
    config?: MutationConfig<typeof register>;
};

export const useLogin = ({ config }: UseLogin = {}) => {
    const navigate = useNavigate();
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error Login', toasterConfig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('auth');
            navigate('/auth/two-factor-validation');
        },
        ...config,
        mutationFn: register,
    });
};
