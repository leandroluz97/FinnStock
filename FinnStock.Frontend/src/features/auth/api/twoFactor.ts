import { axios } from '../../../lib/axios';

export type TwoFactorDto = {
    data: {
        userId: string;
        otpCode: string;
    };
};

export type TwoFactorDtoResponse = {
    token: string;
};

export const twoFactor = ({ data }: TwoFactorDto): Promise<TwoFactorDtoResponse> => {
    return axios.post('/auth/ValidateOTPCode', data);
};

// type UseTwoFactor = {
//     config?: MutationConfig<typeof twoFactor>;
// };

// export const useTwoFactor = ({ config }: UseTwoFactor = {}) => {
//     const navigate = useNavigate();
//     return useMutation({
//         onError: (_, __, context: any) => {
//             toast.error('Error Login', toasterConfig);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries('auth');
//             navigate('/dashboard');
//         },
//         ...config,
//         mutationFn: twoFactor,
//     });
// };
