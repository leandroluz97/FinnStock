import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type ConfirmEmailDto = {
    data: {
        email: string;
        token: string;
    };
};

export const confirmEmail = ({ data }: ConfirmEmailDto): Promise<any> => {
    return axios.post('/auth/Confirm', data);
};

type UseConfirmEmailDto = {
    config?: MutationConfig<typeof confirmEmail>;
};

export const useConfirmEmailDto = ({ config }: UseConfirmEmailDto = {}) => {
    const navigate = useNavigate();
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error Login', toasterConfig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('auth');
            // navigate('/auth/two-factor-validation');
        },
        ...config,
        mutationFn: confirmEmail,
    });
};
