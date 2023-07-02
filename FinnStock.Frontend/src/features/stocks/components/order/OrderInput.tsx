import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputField } from '../../../../components/Form';
import { OrderFormInput } from '../../types';

interface OrderInputProps {
    register: UseFormRegister<OrderFormInput>;
    amount: number;
}

export const OrderInput = ({ register, amount }: OrderInputProps) => {
    return (
        <div>
            <div className="pt-8">
                <InputField
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    placeholder=""
                    type="number"
                    max="1000"
                    min="1"
                    groupFormClassList="flex-1"
                    required
                    key="quantity"
                    register={register('quantity')}
                    hasError={false}
                    errorMessage=""
                />
            </div>
            <div className="flex justify-between border-b-2 border-primary-100 my-5">
                <p className="text-primary-950 font-medium">Value</p>
                <p className="text-primary-950 font-black uppercase text-lg">${amount}</p>
            </div>
        </div>
    );
};
