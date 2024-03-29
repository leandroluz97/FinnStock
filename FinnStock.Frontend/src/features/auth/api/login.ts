import { axios } from '../../../lib/axios';

export type LoginDto = {
    data: {
        email: string;
        password: string;
    };
};
export type LoginResponseDto = {
    userId: string;
};

export const login = async ({ data }: LoginDto): Promise<any> => {
    return axios.post('/Auth/Login', data);
};

// type UseLogin = {
//     config?: MutationConfig<typeof login>;
// };

// export const useLogin = ({ config }: UseLogin = {}) => {
//     const navigate = useNavigate();
//     return useMutation({
//         onError: (_, __, context: any) => {
//             toast.error('Error Login', toasterConfig);
//         },
//         onSuccess: (data) => {
//             queryClient.invalidateQueries('auth');
//             navigate('/auth/two-factor-validation');
//         },
//         ...config,
//         mutationFn: login,
//     });
// };
