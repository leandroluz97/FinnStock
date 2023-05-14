import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

import { InputField } from '../../../components/form';
import { Spinner } from '../../../components/elements';
import validationRules from '../../../utils/formValidations';

type Inputs = {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: boolean;
};

const schema = yup.object().shape({
    one: validationRules.text('one'),
    two: validationRules.text('two'),
    three: validationRules.text('three'),
    four: validationRules.text('four'),
    five: validationRules.text('five'),
    six: validationRules.text('six'),
});

export const TwoFactorForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const submit = async (data: Inputs) => {
        // await loginUser.mutateAsync({
        //     data: {
        //         email: data.email,
        //         password: data.password,
        //     },
        // });
    };
    return (
        <React.Fragment>
            <form noValidate className="py-2" onSubmit={handleSubmit(submit)}>
                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                    Enter Code
                </h2>
                <div className="my-4 flex flex-col lg:flex-row gap-3">
                    <InputField
                        id="one"
                        name="one"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="one"
                        register={register('one')}
                        hasError={!!errors.one}
                        errorMessage=""
                    />
                    <InputField
                        id="two"
                        name="two"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="last_name"
                        register={register('two')}
                        hasError={!!errors.two}
                        errorMessage=""
                    />
                    <InputField
                        id="three"
                        name="three"
                        // label="First Name"
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="three"
                        register={register('three')}
                        hasError={!!errors.three}
                        errorMessage=""
                    />
                    <InputField
                        id="four"
                        name="four"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="four"
                        register={register('four')}
                        hasError={!!errors.four}
                        errorMessage=""
                    />
                    <InputField
                        id="five"
                        name="five"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="five"
                        register={register('five')}
                        hasError={!!errors.five}
                        errorMessage=""
                    />
                    <InputField
                        id="six"
                        name="six"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        isRequired
                        key="six"
                        register={register('six')}
                        hasError={!!errors.six}
                        errorMessage=""
                    />
                </div>

                <div>
                    <button
                        disabled={false}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Send Code
                        {false && (
                            <span className="ml-2">
                                <Spinner />
                            </span>
                        )}
                    </button>
                </div>
            </form>
            <div />
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
