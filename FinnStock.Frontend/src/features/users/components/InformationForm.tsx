import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import codes from 'country-calling-code';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { parsePhoneNumber } from 'libphonenumber-js/min';
import { useParams } from 'react-router-dom';
import validationRules from '../../../utils/formValidations';
import { InputField } from '../../../components/Form';
import { CountryCode } from '../../../components/Elements';
import { useAuth } from '../../../lib/auth';
import { Spinner } from '../../../components/Loading';
import { useUpdateUser } from '../api/updateUser';

type Inputs = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    birthDate: string;
};
const schema = yup.object().shape({
    firstName: validationRules.text('FirstName'),
    lastName: validationRules.text('LastName'),
    // birthDate: validationRules.optionText('BirthDate'),
});

export const InformationForm = () => {
    const { user } = useAuth();
    const [code, setCode] = useState<number>(228);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });
    const updateUser = useUpdateUser();
    const { userId } = useParams();

    useEffect(() => {
        if (user !== null) {
            const parsed = parsePhoneNumber(user.phoneNumber);
            setCode(codes.findIndex((c) => c.isoCode2 === parsed.country));
            setValue('firstName', user.firstName, { shouldValidate: true });
            setValue('lastName', user.lastName, { shouldValidate: true });
            setValue('email', user.email, { shouldValidate: true });
            setValue('birthDate', user.birthDate, { shouldValidate: false });
            setValue('phoneNumber', parsed.nationalNumber, { shouldValidate: true });
        }
    }, [user]);

    const submit = async (data: Inputs) => {
        try {
            await updateUser.mutateAsync({
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    birthDate: new Date().toISOString(),
                    phoneNumber: user?.phoneNumber,
                    email: user.email,
                    id: userId,
                },
            });
        } catch (error) {}
    };

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-6 ">
                <div className="">
                    <div className="flex flex-col flex-wrap justify-center content-center py-6 bg-white w-56 rounded mt-5 ">
                        <img
                            className="w-36 h-36 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                            src={user?.profileUrl}
                            alt={user?.email}
                        />
                        <button
                            type="button"
                            className="mt-3 text-white bg-primary-800 hover:bg-primary-900 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Change picture
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit(submit)} noValidate>
                        <div className=" flex flex-col lg:flex-row gap-3 my-4">
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
                            id="birthDate"
                            name="birthDate"
                            label="Birth Date"
                            placeholder="John"
                            type="text"
                            groupFormClassList="flex-1"
                            required
                            key="birthDate"
                            register={register('birthDate')}
                            hasError={!!errors.birthDate}
                            errorMessage={errors.birthDate?.message || ''}
                        />

                        <InputField
                            id="email"
                            name="email"
                            label="Email"
                            disabled
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
                                disabled
                                groupFormClassList="flex-1 w-full"
                                required
                                key="phone_number"
                                register={register('phoneNumber')}
                                hasError={!!errors.phoneNumber}
                                errorMessage={errors.phoneNumber?.message || ''}
                            />
                        </div>
                        <div className="mt-5 flex justify-end">
                            <button
                                disabled={updateUser.isLoading}
                                type="submit"
                                className="flex flex-row items-center justify-center text-white  bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5"
                            >
                                Save
                                {updateUser.isLoading && (
                                    <span className="ml-2">
                                        <Spinner />
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
