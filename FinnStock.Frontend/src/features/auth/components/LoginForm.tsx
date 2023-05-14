import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { NavLink } from 'react-router-dom';
import validationRules from '../../../utils/formValidations';
import { CheckBoxField, InputField } from '../../../components/form';
import googleLogo from '../../../assets/google-logo-sm.svg';
import { Spinner } from '../../../components/elements';
import { useLogin } from '../api/login';

type Inputs = {
    email: string;
    password: string;
    remember: boolean;
};
const schema = yup.object().shape({
    email: validationRules.email(),
    password: validationRules.password(),
});

export const LoginForm = () => {
    const loginUser = useLogin();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        await loginUser.mutateAsync({
            data: {
                email: data.email,
                password: data.password,
            },
        });
    };

    return (
        <React.Fragment>
            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">Login</h2>
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
                <div className="flex flex-row justify-between items-center">
                    <CheckBoxField
                        id="link_checkbox"
                        groupFormClassList="mb-4 mt-0 flex items-center"
                        key="link_checkbox"
                        register={register('remember')}
                        hasError={!!errors.remember}
                        errorMessage={errors.remember?.message || ''}
                    >
                        <label
                            htmlFor="link-checkbox"
                            className="ml-2 text-sm font-medium text-primary-950"
                        >
                            Remember me
                        </label>
                    </CheckBoxField>
                    <NavLink
                        to="/auth/forgot-password"
                        className="mb-4 mt-0 text-blue-600 text-xs dark:text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </NavLink>
                </div>
                <div>
                    <button
                        disabled={loginUser.isLoading}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Create account
                        {loginUser.isLoading && (
                            <span className="ml-2">
                                <Spinner />
                            </span>
                        )}
                    </button>
                </div>
            </form>
            <div>
                <form
                    action="https://localhost:7100/api/v1/auth/ExternalLogin?provider=Google&returnUrl=/home"
                    method="post"
                >
                    <button
                        type="submit"
                        className="w-full flex justify-center gap-2 text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
                    >
                        <img src={googleLogo} alt="google logo" />
                        Login with Google acount
                    </button>
                </form>
            </div>
            <p className="my-4 text-center text-primary-950 text-sm">
                Don't have an account?{' '}
                <NavLink
                    to="/auth/signup"
                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium"
                >
                    Sign up
                </NavLink>{' '}
            </p>
        </React.Fragment>
    );
};
