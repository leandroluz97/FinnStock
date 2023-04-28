import React from 'react';
import finnstockLogo from '../assets/finnstock-white.svg';
import finnstockPrimaryLogo from '../assets/finnstock-primary.svg';
import googleLogo from '../assets/google-logo-sm.svg';
import { InputField } from '../components/form/InputField';

export const AppRoutes = () => {
    // throw Error('error');
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

                            <form action="" className="py-2">
                                <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                                    Sign In
                                </h2>
                                <div className=" flex flex-col lg:flex-row gap-3">
                                    {/* <div className="flex-1">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-1 text-sm font-medium text-primary-950"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                            // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 ring-2 focus:border-primary border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="John"
                                            required
                                        />
                                    </div> */}
                                    {/* <div className="flex-1">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-1 text-sm font-medium text-primary-950"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                            placeholder="John"
                                            required
                                        />
                                    </div> */}
                                    <InputField
                                        id="first_name"
                                        name="first_name"
                                        label="First Name"
                                        placeholder="John"
                                        type="text"
                                        groupFormClassList="flex-1"
                                        hasError={false}
                                        isRequired
                                        errorMessage=""
                                        key="first_name"
                                    />
                                    <InputField
                                        id="last_name"
                                        name="last_name"
                                        label="Last Name"
                                        placeholder="Doe"
                                        type="text"
                                        groupFormClassList="flex-1"
                                        hasError={false}
                                        isRequired
                                        errorMessage=""
                                        key="last_name"
                                    />
                                </div>
                                {/* <div className="my-4 flex-1">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        // className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        className="bg-red-50 border-red-200 border-2 text-red-700 text-sm rounded focus:ring-red-100 focus:ring-2 focus:border-red-600 focus:border-2 block w-full p-2.5 placeholder-red-400"
                                        placeholder="johndoe@gmail.com"
                                        required
                                    />
                                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                                        <span className="font-medium">Well done!</span> Some success
                                        message.
                                    </p>
                                </div> */}
                                <InputField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder="johndoe@gmail.com"
                                    type="text"
                                    groupFormClassList="my-4"
                                    hasError={false}
                                    isRequired
                                    errorMessage=""
                                    key="email"
                                />
                                <InputField
                                    id="phone_number"
                                    name="phone_number"
                                    label="Phone number"
                                    placeholder="915210066"
                                    type="text"
                                    groupFormClassList="my-4"
                                    hasError={false}
                                    isRequired
                                    errorMessage=""
                                    key="phone_number"
                                />
                                <InputField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    placeholder=""
                                    type="password"
                                    groupFormClassList="my-4"
                                    hasError={false}
                                    isRequired
                                    errorMessage=""
                                    key="password"
                                />
                                {/* <div className="my-4">
                                    <label
                                        htmlFor="phone_number"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        placeholder="915210066"
                                        required
                                    />
                                </div> */}
                                {/* <div className="my-4">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        required
                                    />
                                </div> */}
                                <div className="my-4 flex items-center">
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-primary-900 bg-gray-100 border-gray-300 rounded focus:ring-primary-900 "
                                    />
                                    <label
                                        htmlFor="link-checkbox"
                                        className="ml-2 text-sm font-medium text-primary-950 "
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
                                </div>
                                <div>
                                    <button
                                        type="button"
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
