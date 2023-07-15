import { axios } from '../../../lib/axios';

export type ForgotPasswordDto = {
    data: {
        email: string;
    };
};

export const forgotPassword = ({ data }: ForgotPasswordDto): Promise<any> => {
    return axios.post('/auth/RequestResetPassword', data);
};

// type UseForgotPassword = {
//     config?: MutationConfig<typeof forgotPassword>;
// };

// export const useForgotPassword = ({ config }: UseForgotPassword = {}) => {
//     return useMutation({
//         onError: (_, __, context: any) => {
//             toast.error('Error Login', toasterConfig);
//         },
//         onSuccess: () => {
//             toast.success('Error Forgot Password', toasterConfig);
//         },
//         ...config,
//         mutationFn: forgotPassword,
//     });
// };
