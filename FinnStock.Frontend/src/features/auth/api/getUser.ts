import axios from 'axios';

export type userDto = {
    data: {
        email: string;
    };
};

export const getUser = ({ data }: userDto): Promise<any> => {
    return axios.post('/auth/user', data);
};
