import { axios } from '../../../lib/axios';

export type userDto = {
    data: {
        userId: string;
    };
};

// export const getUser = ({ data }: userDto): Promise<any> => {
//     return axios.get(`/auth/user/${data.userId}`);
// };
export const getUser = (userId: string): Promise<any> => {
    return axios.get(`/Users/${userId}`);
};
