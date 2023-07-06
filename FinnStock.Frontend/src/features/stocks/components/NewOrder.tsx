import React from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Order } from './order';
import { Title } from './_common/Title';
import { OrderFormInput } from '../types';
import { useCreateSellOrder } from '../../orders/api/createSellOrder';
import { useCreateBuyOrder } from '../../orders/api/createbuyOrder';

import { useStockProfile } from '../api/getStockProfile';
import { useStockQuote } from '../api/getStockQuote';

type IType = 'buy' | 'sell';
type IOrderType = {
    buy: () => void;
    sell: () => void;
};

const schema = yup.object().shape({
    amount: yup
        .string()
        .required('Number is a required field')
        .min(1, 'Amount is too low - should be at least 1 minimum.')
        .max(10000, 'Amount is too high - should be at least 10000 maximun.'),
});
const MAXIMUM_QUANTITY = 10000;
const MINIMUM_QUANTITY = 1;
const QUANTITY = 'quantity';
const ERROR_MESSAGE = 'Invalid quantity value - should be between 1 and 10 000';

export const NewOrder = () => {
    const { userId, symbol } = useParams();
    const { register, setError, watch, formState, getValues, reset } = useForm<OrderFormInput>({
        mode: 'onChange',
        defaultValues: { quantity: MINIMUM_QUANTITY },
    });
    const { data: profile } = useStockProfile({ symbol });
    const { data: quotes } = useStockQuote({ symbol });
    const { errors, isValid } = formState;
    const sellOrder = useCreateSellOrder();
    const buyOrder = useCreateBuyOrder();
    const quote = quotes?.c?.at(-1);
    const total = Number(watch(QUANTITY) || MINIMUM_QUANTITY) * (quote || 0);

    const displayErrorMessage = () => {
        setError(QUANTITY, { type: 'custom', message: ERROR_MESSAGE }, { shouldFocus: true });
    };

    const submitOrder = (type: IType) => async () => {
        if (!isValid) return displayErrorMessage();
        if (!(profile && quote)) return;

        const quantity = Number(Number(getValues(QUANTITY)).toFixed());
        const amount = quantity * quote;
        const { logo } = profile;
        const payload = { logo, amount, quantity, symbol, userId };

        const orderType: IOrderType = {
            buy: async () => {
                await buyOrder.mutateAsync({ data: payload });
            },
            sell: async () => {
                await sellOrder.mutateAsync({ data: payload });
            },
        };
        await orderType[type]();
        reset({ quantity: MINIMUM_QUANTITY });
    };

    if (Number(watch(QUANTITY) || MINIMUM_QUANTITY) > MAXIMUM_QUANTITY) {
        reset({ quantity: MAXIMUM_QUANTITY });
    }
    if (Number(watch(QUANTITY) || MINIMUM_QUANTITY) < MINIMUM_QUANTITY) {
        reset({ quantity: MINIMUM_QUANTITY });
    }

    return (
        <Order.Root>
            <Title title="New Order" />
            <Order.Content>
                <Order.Input register={register} amount={total} errors={errors} />
                <Order.Footer>
                    <Order.Action
                        content="BUY"
                        type="button"
                        disabled={buyOrder.isLoading}
                        onClick={submitOrder('buy')}
                    />
                    <Order.Action
                        content="SELL"
                        type="button"
                        disabled={sellOrder.isLoading}
                        onClick={submitOrder('sell')}
                    />
                    <Order.Link url={`/u/${userId}/orders`} content="Trade Options" />
                </Order.Footer>
            </Order.Content>
        </Order.Root>
    );
};
