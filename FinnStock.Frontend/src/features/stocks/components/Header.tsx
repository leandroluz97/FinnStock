import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <React.Fragment>
            <header>
                <section className=" my-2 flex content-center">
                    {/* <img
                    src="https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png"
                    alt=""
                    srcSet=""
                    className="rounded-xl w-10 max-w-md"
                /> */}
                    <h2 className="text-3xl font-extrabold text-primary-900">Apple Inc</h2>
                    <span className="bg-primary-500 text-primary-950 text-xs font-medium mx-2 px-2.5 py-0.5 rounded h-5 self-center">
                        AAPL
                    </span>
                    <p className="self-center border-l-2 text-xl border-primary-500 px-3 text-primary-900">
                        {/* ❤️ */}
                        🏅
                    </p>
                </section>
                <section className="flex">
                    <p className="self-center font-medium border-r-2 pr-2 border-primary-500 text-primary-900">
                        Website
                    </p>
                    <p className="self-center font-medium border-r-2 px-2 border-primary-500 text-primary-900">
                        Phone: 14089961010
                    </p>
                    <p className="self-center font-medium border-r-2 px-2 border-primary-500 text-primary-900">
                        IPO: 14089961010
                    </p>
                    <p className="self-center font-medium px-2 border-primary-500 text-primary-900">
                        Country: US
                    </p>
                </section>
            </header>
            <section>
                <div className="grid grid-cols-4 gap-4 mt-8">
                    <div className="bg-white p-4 rounded max-w-xl">
                        <div className="bg-primary-500 flex flex-col justify-center content-center w-12 h-12 text-primary-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                />
                            </svg>
                        </div>
                        <div className="pt-3">
                            <h3 className="text-primary-950 font-black uppercase">Exchange</h3>
                            <p className="text-sm text-slate-500 ">NASDAQ/NMS (GLOBAL MARKET)</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded max-w-xl">
                        <div className="bg-primary-500 flex flex-col justify-center content-center w-12 h-12 text-primary-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                />
                            </svg>
                        </div>
                        <div className="pt-3">
                            <h3 className="text-primary-950 font-black uppercase">
                                Market Capitalization
                            </h3>
                            <p className="text-sm text-slate-500 ">1415993</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded max-w-xl">
                        <div className="bg-primary-500 flex flex-col justify-center content-center w-12 h-12 text-primary-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                />
                            </svg>
                        </div>
                        <div className="pt-3">
                            <h3 className="text-primary-950 font-black uppercase">
                                Share Outstanding
                            </h3>
                            <p className="text-sm text-slate-500 ">4375.47998046875</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded max-w-xl">
                        <div className="bg-primary-500 flex flex-col justify-center content-center w-12 h-12 text-primary-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                />
                            </svg>
                        </div>
                        <div className="pt-3">
                            <h3 className="text-primary-950 font-black uppercase">Currency</h3>
                            <p className="text-sm text-slate-500 ">USD</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
