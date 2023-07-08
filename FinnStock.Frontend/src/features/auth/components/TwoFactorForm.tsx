import React, { useEffect } from 'react';
import * as R from 'ramda';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { InputField } from '../../../components/Form';
import { Spinner } from '../../../components/Loading';
import validationRules from '../../../utils/formValidations';
import { useAuth } from '../../../lib/auth';
import { storageService } from '../../../utils/storage';
import { queryClient } from '../../../lib/react-query';

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
    const { twoFactor, isTwoFactorSuccess } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        getValues,
        setFocus,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    useEffect(() => {
        const values = getValues();
        if (!R.isEmpty(values.five) && R.isEmpty(values.six)) {
            setFocus('six');
        } else if (!R.isEmpty(values.four) && R.isEmpty(values.five)) {
            setFocus('five');
        } else if (!R.isEmpty(values.three) && R.isEmpty(values.four)) {
            setFocus('four');
        } else if (!R.isEmpty(values.two) && R.isEmpty(values.three)) {
            setFocus('three');
        } else if (!R.isEmpty(values.one) && R.isEmpty(values.two)) {
            setFocus('two');
        }
    }, [watch()]);

    const submit = async (data: Inputs) => {
        const searchQueries = new URLSearchParams(location.search);
        const userId = searchQueries.get('userId');
        const otpCode = Object.values(data).join('');

        if (!userId) return;

        const { token } = await twoFactor({
            data: {
                otpCode,
                userId,
            },
        });
        storageService.setToken(token);
        queryClient.invalidateQueries('user');
        navigate(`/u/${userId}/stocks`);
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
                        autoFocus
                        groupFormClassList="flex-1"
                        required
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
                        required
                        key="last_name"
                        register={register('two')}
                        hasError={!!errors.two}
                        errorMessage=""
                    />
                    <InputField
                        id="three"
                        name="three"
                        label=""
                        placeholder=""
                        type="text"
                        groupFormClassList="flex-1"
                        required
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
                        required
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
                        required
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
                        required
                        key="six"
                        register={register('six')}
                        hasError={!!errors.six}
                        errorMessage=""
                    />
                </div>

                <div>
                    <button
                        disabled={isTwoFactorSuccess}
                        type="submit"
                        className="flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Send Code
                        {isTwoFactorSuccess && (
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
