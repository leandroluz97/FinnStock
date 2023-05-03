import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import codes from 'country-calling-code';
import { yupResolver } from '@hookform/resolvers/yup';
import finnstockLogo from '../assets/finnstock-white.svg';
import finnstockPrimaryLogo from '../assets/finnstock-primary.svg';
import googleLogo from '../assets/google-logo-sm.svg';
import { InputField, CheckBoxField } from '../components/form';
import { CountryCode } from '../components/elements';

type Inputs = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    term: boolean;
};
const schema = yup.object().shape({
    firstName: yup.string().required('FirstName is a required field'),
    lastName: yup.string().required('LastName is a required field'),
    email: yup.string().email().required('Email is a required field'),
    phoneNumber: yup.string().required('Email is a required field'),
    term: yup.boolean().isTrue().required(),
    password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const AppRoutes = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });
    const [code, setCode] = useState<number>(228);

    const submit = (d: any) => {
        console.log(d);
    };

    return (
        <div className="h-screen">
            <div className="flex h-full">
                <div className=" hidden md:block  flex-1 bg-primary-900 p-10 bg-logo-pattern bg-no-repeat bg-bottom bg-contain">
                    <div>
                        <img src={finnstockLogo} alt="finnstock" />
                    </div>
                    <div className="mt-16">
                        <h1 className="text-white text-3xl font-medium pb-3">Welcome Back!</h1>
                        <p className="text-primary-500 text-xl">
                            Contrary to popular belief, Lorem Ipsum <br /> is not simply random
                            text.
                        </p>
                    </div>
                </div>
                <div className="flex-1 overflow-y-scroll md:overflow-auto bg-white">
                    <div className="container h-full flex flex-col justify-center align-middle max-w-lg m-auto p-5 md:p-10">
                        {/* <div className="text-right">
                            <a
                                href="/login"
                                type="button"
                                className="text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-10 py-2.5 "
                            >
                                Login
                            </a>
                        </div> */}

                        <section className="my-5">
                            <div className="bg-white text-center md:hidden p-2 mb-2 sticky top-0 left-0 right-0 ">
                                <img
                                    src={finnstockPrimaryLogo}
                                    alt="finnstock"
                                    className="m-auto w-4/6"
                                />
                            </div>

                            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                                    Sign In
                                </h2>
                                <div className=" flex flex-col lg:flex-row gap-3">
                                    <InputField
                                        id="first_name"
                                        name="firstName"
                                        label="First Name"
                                        placeholder="John"
                                        type="text"
                                        groupFormClassList="flex-1"
                                        isRequired
                                        key="first_name"
                                        register={register('firstName')}
                                        hasError={!!errors.firstName}
                                        errorMessage={errors.firstName?.message || ''}
                                    />
                                    <InputField
                                        id="last_name"
                                        name="lastName"
                                        label="Last Name"
                                        placeholder="Doe"
                                        type="text"
                                        groupFormClassList="flex-1"
                                        isRequired
                                        key="last_name"
                                        register={register('lastName')}
                                        hasError={!!errors.lastName}
                                        errorMessage={errors.lastName?.message || ''}
                                    />
                                </div>
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
                                <div className="flex content-end flex-row gap-3">
                                    <CountryCode
                                        code={code}
                                        setCode={setCode}
                                        hasError={!!errors.phoneNumber}
                                    />
                                    <InputField
                                        id="phone_number"
                                        name="phoneNumber"
                                        label="Phone number"
                                        placeholder="915210066"
                                        type="text"
                                        groupFormClassList="flex-1 w-full"
                                        isRequired
                                        key="phone_number"
                                        register={register('phoneNumber')}
                                        hasError={!!errors.phoneNumber}
                                        errorMessage={errors.phoneNumber?.message || ''}
                                    />
                                </div>

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
                                <CheckBoxField
                                    id="link_checkbox"
                                    groupFormClassList="my-4 flex items-center"
                                    key="link_checkbox"
                                    register={register('term')}
                                    hasError={!!errors.term}
                                    errorMessage={errors.term?.message || ''}
                                >
                                    <label
                                        htmlFor="link-checkbox"
                                        className="ml-2 text-sm font-medium text-primary-950"
                                    >
                                        I agree with the{' '}
                                        <a
                                            href="/"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </CheckBoxField>

                                <div>
                                    <button
                                        type="submit"
                                        className="text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                                    >
                                        Create account
                                    </button>
                                </div>
                            </form>
                            <div>
                                <button
                                    type="button"
                                    className="w-full flex justify-center gap-2 text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
                                >
                                    <img src={googleLogo} alt="google logo" />
                                    Login with Google acount
                                </button>
                            </div>
                            <p className="my-4 text-center text-primary-950 text-sm">
                                Already have an account?{' '}
                                <a
                                    href="/asd"
                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium"
                                >
                                    Login
                                </a>{' '}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppRoutes;
