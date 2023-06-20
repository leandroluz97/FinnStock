import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../components/Form';
import validationRules from '../../../utils/formValidations';

type Inputs = {
    password: string;
    newPassword: string;
    confirmPassword: string;
};
const schema = yup.object().shape({
    password: validationRules.password(),
    newPassword: validationRules.password(),
    confirmPassword: validationRules.password(),
});

export const PasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        console.log(data);
    };

    return (
        <section>
            <div className="flex-1">
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <InputField
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="••••••••••"
                        type="password"
                        groupFormClassList="my-4 relative"
                        required
                        key="password"
                        register={register('password')}
                        hasError={!!errors.password}
                        errorMessage={errors.password?.message || ''}
                    />
                    <InputField
                        id="newPassword"
                        name="newPassword"
                        label="New Password"
                        placeholder="••••••••••"
                        type="password"
                        groupFormClassList="my-4 relative"
                        required
                        key="newPassword"
                        register={register('newPassword')}
                        hasError={!!errors.newPassword}
                        errorMessage={errors.newPassword?.message || ''}
                    />
                    <InputField
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="••••••••••"
                        type="password"
                        groupFormClassList="my-4 relative"
                        required
                        key="confirmPassword"
                        register={register('confirmPassword')}
                        hasError={!!errors.confirmPassword}
                        errorMessage={errors.confirmPassword?.message || ''}
                    />

                    <div className="mt-5 flex justify-end">
                        <button
                            disabled={false}
                            type="submit"
                            className="flex flex-row items-center justify-center text-white  bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5"
                        >
                            Save
                            {false && (
                                <span className="ml-2">
                                    <Spinner />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
