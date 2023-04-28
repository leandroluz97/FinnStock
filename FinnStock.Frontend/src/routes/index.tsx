import React from 'react';
import finnstockLogo from '../assets/finnstock-white.svg';
import googleLogo from '../assets/google-logo-sm.svg';

export const AppRoutes = () => {
    // throw Error('error');
    return (
        <div className="h-screen">
            <div className="flex h-full">
                <div className="flex-1 bg-primary-900 p-10 bg-logo-pattern bg-no-repeat bg-bottom bg-contain">
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
                <div className="flex-1 bg-white">
                    <div className="container max-w-lg m-auto p-10">
                        <div className="text-right">
                            <a
                                href="/login"
                                type="button"
                                className="text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-10 py-2.5 "
                            >
                                Login
                            </a>
                        </div>

                        <section className="">
                            <h2 className="text-3xl font-medium text-primary-900 mb-4">Sign In</h2>
                            <form action="" className="py-2">
                                <div className="my-4">
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
                                </div>
                                <div className="my-4">
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
                                </div>
                                <div className="my-4">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="my-4">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="my-4">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="my-4">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-1 text-sm font-medium text-primary-950"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400"
                                        placeholder="John"
                                        required
                                    />
                                </div>
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
                                        className="text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
                                    className="text-blue-600 dark:text-blue-500 hover:underline"
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
