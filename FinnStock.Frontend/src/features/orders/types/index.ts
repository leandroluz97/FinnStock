import { BaseEntity } from '../../../types/formTypes';

export type BuyOrder = {
    amount: number;
    quantity: number;
    symbol: string;
    userId: string;
    logo: string;
} & BaseEntity;

export type SellOrder = BuyOrder;
