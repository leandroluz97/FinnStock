import { axios } from '../../../lib/axios';

export type ConfirmEmailDto = {
    data: {
        email: string;
        token: string;
    };
};

export const confirmEmail = ({ data }: ConfirmEmailDto): Promise<any> => {
    return axios.post('/auth/Confirm', data);
};
