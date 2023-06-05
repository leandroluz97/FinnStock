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
export type LoginResponseDto = {
    userId: string;
};

export const login = ({ data }: LoginDto): Promise<any> => {
    return axios.post('/auth/login', data);
};

type UseLogin = {
    config?: MutationConfig<typeof login>;
};

export const useLogin = ({ config }: UseLogin = {}) => {
    const navigate = useNavigate();
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error Login', toasterConfig);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('auth');
            navigate('/auth/two-factor-validation');
        },
        ...config,
        mutationFn: login,
    });
};
