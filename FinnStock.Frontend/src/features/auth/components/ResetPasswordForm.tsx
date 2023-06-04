import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '../../../components/Form';
import validationRules from '../../../utils/formValidations';
import { Spinner } from '../../../components/Elements';
import { useAuth } from '../../../lib/auth';

type Inputs = {
    password: string;
};
const schema = yup.object().shape({
    password: validationRules.password(),
});

export const ResetPasswordForm = () => {
    const { resetPassword, isResetingPassword } = useAuth();
    const location = useLocation();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        const searchQueries = new URLSearchParams(location.search);
        const email = searchQueries.get('email');
        const activationToken = searchQueries.get('activationToken');

        if (!(email && activationToken)) {
            return;
        }

        await resetPassword({
            data: {
                email,
                activationToken,
                password: data.password,
            },
        });
    };

    return (
        <React.Fragment>
            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                    New Password
                </h2>
                <InputField
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="••••••••••"
                    type="password"
                    groupFormClassList="my-4 relative"
                    isRequired
                    key="password"
                    register={register('password')}
                    hasError={!!errors.password}
                    errorMessage={errors.password?.message || ''}
                />

                <div>
                    <button
                        disabled={isResetingPassword}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Submit
                        {isResetingPassword && (
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
