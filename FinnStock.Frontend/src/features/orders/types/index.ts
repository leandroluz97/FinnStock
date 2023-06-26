import { BaseEntity } from '../../../types';

export type BuyOrder = {
    amount: number;
    quantity: number;
    symbol: string;
    userId: string;
    logo: string;
} & BaseEntity;

export type SellOrder = BuyOrder;
