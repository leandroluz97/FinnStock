import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { toasterConfig } from '../../../lib/react-toastify';

export type TwoFactorDto = {
    data: {
        userId: string;
        otpCode: string;
    };
};

export const twoFactor = ({ data }: TwoFactorDto): Promise<any> => {
    return axios.post('/auth/ValidateOTPCode', data);
};

type UseTwoFactor = {
    config?: MutationConfig<typeof twoFactor>;
};

export const useTwoFactor = ({ config }: UseTwoFactor = {}) => {
    const navigate = useNavigate();
    return useMutation({
        onError: (_, __, context: any) => {
            toast.error('Error Login', toasterConfig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('auth');
            navigate('/dashboard');
        },
        ...config,
        mutationFn: twoFactor,
    });
};
