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

export type Quote = {
    c: number[];
    h: number[];
    l: number[];
    o: number[];
    pc: number[];
    t: number[];
};

export type StockProfile = {
    country: string;
    currency: string;
    name: string;
    ipo: string;
    marketCapitalization: number;
    ticker: string;
    weburl: string;
    logo: string;
    phone: string;
    exchange: string;
};
