import React from 'react';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Order } from './order';
import { Title } from './_common/Title';
import { OrderFormInput } from '../types';

export const NewOrder = () => {
    const { userId } = useParams();
    const { register, getValues } = useForm<OrderFormInput>();
    return (
        <Order.Root>
            <Title title="New Order" />
            <Order.Content>
                <Order.Input register={register} amount={getValues('quantity')} />
                <Order.Footer>
                    <Order.Action content="BUY" type="button" />
                    <Order.Action content="SELL" type="button" />
                    <Order.Link url={`/u/${userId}/orders`} content="Trade Options" />
                </Order.Footer>
            </Order.Content>
        </Order.Root>
    );
};
