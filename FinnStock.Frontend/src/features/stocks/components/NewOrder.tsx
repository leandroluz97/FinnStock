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

export const NewOrder = () => {
    const { userId, symbol } = useParams();
    const { register, setError, watch, formState, getValues, reset } = useForm<OrderFormInput>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: { quantity: 1 },
    });
    const { data: profile } = useStockProfile({ symbol });
    const { data: quote } = useStockQuote({ symbol });
    const { errors, isValid } = formState;
    const sellOrder = useCreateSellOrder();
    const buyOrder = useCreateBuyOrder();
    const total = Number(watch('quantity') || 1) * (quote?.c || 1);

    function displayErrorMessage() {
        setError(
            'quantity',
            { type: 'custom', message: `Invalid quantity value - should be between 1 and 10 000` },
            { shouldFocus: true }
        );
    }

    const submitOrder = (type: IType) => async () => {
        if (!isValid) return displayErrorMessage();
        if (!(profile && quote)) return;

        const quantity = parseInt(getValues('quantity'), 10);
        const amount = quantity * quote.c;
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
        reset({ quantity: 1 });
    };

    if (Number(watch('quantity') || 1) > 10000) {
        reset({ quantity: 10000 });
    }
    if (Number(watch('quantity') || 1) < 1) {
        reset({ quantity: 1 });
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
