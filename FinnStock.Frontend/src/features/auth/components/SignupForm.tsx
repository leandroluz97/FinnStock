import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import parsePhoneNumber from 'libphonenumber-js';
import * as yup from 'yup';
import codes from 'country-calling-code';

import { NavLink } from 'react-router-dom';
import { CheckBoxField, InputField } from '../../../components/Form';
import { CountryCode } from '../../../components/Elements';
import { Spinner } from '../../../components/Loading/Spinner';
import googleLogo from '../../../assets/google-logo-sm.svg';
import validationRules from '../../../utils/formValidations';
import { useAuth } from '../../../lib/auth';

type Inputs = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    term: boolean;
};
const schema = yup.object().shape({
    firstName: validationRules.text('FirstName'),
    lastName: validationRules.text('LastName'),
    email: validationRules.email(),
    phoneNumber: validationRules.text('PhoneNumber'),
    term: validationRules.checkbox(),
    password: validationRules.password(),
});

export const SignupForm = () => {
    const [code, setCode] = useState<number>(228);
    const { register: registerUser, isRegisterSuccess, isRegistering } = useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        const [countryIndex] = codes[code].countryCodes;
        const parsed = parsePhoneNumber(`+${countryIndex}${data.phoneNumber}`);

        if (!parsed?.isPossible()) {
            return setError(
                'phoneNumber',
                { type: 'custom', message: `Not a valid ${codes[code].country} phone number` },
                { shouldFocus: true }
            );
        }
        await registerUser({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: `+${countryIndex}${data.phoneNumber}`,
                password: data.password,
            },
        });
    };

    return isRegisterSuccess ? (
        <React.Fragment>
            <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                Email confirmation Sent!🎉🎉
            </h2>
            <p className="text-sm font-medium text-primary-700">
                Please check your inbox and look for an email from us. It should contain a unique
                confirmation link. Click on the link to verify your email address.
            </p>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                    Sign Up
                </h2>
                <div className=" flex flex-col lg:flex-row gap-3">
                    <InputField
                        id="first_name"
                        name="firstName"
                        label="First Name"
                        placeholder="John"
                        type="text"
                        groupFormClassList="flex-1"
                        required
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
                        required
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
                    required
                    key="email"
                    register={register('email')}
                    hasError={!!errors.email}
                    errorMessage={errors.email?.message || ''}
                />
                <div className="flex content-end flex-row gap-3">
                    <CountryCode code={code} setCode={setCode} hasError={!!errors.phoneNumber} />
                    <InputField
                        id="phone_number"
                        name="phoneNumber"
                        label="Phone number"
                        placeholder="915210066"
                        type="text"
                        groupFormClassList="flex-1 w-full"
                        required
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
                    required
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
                        <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">
                            terms and conditions
                        </a>
                        .
                    </label>
                </CheckBoxField>

                <div>
                    <button
                        disabled={isRegistering}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Create account
                        {isRegistering && (
                            <span className="ml-2">
                                <Spinner />
                            </span>
                        )}
                    </button>
                </div>
            </form>
            <div>
                <form
                    action="https://finnstock.azurewebsites.net/api/v1/auth/ExternalLogin?provider=Google&returnUrl=/home"
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
                Already have an account?{' '}
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
