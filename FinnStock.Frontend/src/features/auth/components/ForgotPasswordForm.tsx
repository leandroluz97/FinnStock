import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { InputField } from '../../../components/Form';
import validationRules from '../../../utils/formValidations';
import { Spinner } from '../../../components/Elements';
import { useAuth } from '../../../lib/auth';

type Inputs = {
    email: string;
};
const schema = yup.object().shape({
    email: validationRules.email(),
});

export const ForgotPasswordForm = () => {
    const { forgotPassword, isForgotingPassword } = useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        await forgotPassword({
            data: {
                email: data.email,
            },
        });
    };

    return (
        <React.Fragment>
            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                    Forgot Your Password?
                </h2>
                <InputField
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    type="text"
                    groupFormClassList="my-4"
                    isRequired
                    key="email"
                    register={register('email')}
                    hasError={!!errors.email}
                    errorMessage={errors.email?.message || ''}
                />

                <div>
                    <button
                        disabled={isForgotingPassword}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Submit
                        {isForgotingPassword && (
                            <span className="ml-2">
                                <Spinner />
                            </span>
                        )}
                    </button>
                </div>
            </form>
            <div />
            <p className="my-4 text-center text-primary-950 text-sm">
                Go back to{' '}
                <NavLink
                    to="/auth/login"
                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium"
                >
                    Login
                </NavLink>{' '}
            </p>
        </React.Fragment>
    );
};
