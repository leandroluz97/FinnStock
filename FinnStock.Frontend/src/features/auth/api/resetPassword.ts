import { axios } from '../../../lib/axios';

export type ResetPasswordDto = {
    data: {
        email: string;
        password: string;
        activationToken: string;
    };
};

export const resetPassword = ({ data }: ResetPasswordDto): Promise<any> => {
    return axios.post('/auth/ResetPassword', data);
};

// type UseResetPasswordDto = {
//     config?: MutationConfig<typeof resetPassword>;
// };

// export const useResetPassword = ({ config }: UseResetPasswordDto = {}) => {
//     return useMutation({
//         onError: (_, __, context: any) => {
//             toast.error('Error Reset Password', toasterConfig);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries('auth');
//         },
//         ...config,
//         mutationFn: resetPassword,
//     });
// };
