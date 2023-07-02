import { BaseEntity } from '../../../types';

export type Stock = {
    currency: string;
    description: string;
    displaySymbol: string;
    figi: string;
    mic: string;
    symbol: string;
    type: string;
};

export type FavoriteStock = {
    id: string;
    userId: string;
    description: string;
    symbol: string;
};

export type OrderFormInput = {
    quantity: number;
};
