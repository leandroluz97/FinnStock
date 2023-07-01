import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { InputField } from '../../../components/Form';

const data = [
    {
        name: '01/07/2023',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomToolTip = (obe) => {
    console.log(obe);

    return (
        <div className="bg-primary-800 p-2 px-3 rounded-lg text-white opacity-90 ">
            <p className="text-xs font-thin">22 March 2023</p>
            <p className="text-lg font-bold">$ 78,560</p>
        </div>
    );
};

export const Header = () => {
    const { register } = useForm();
    return (
        <React.Fragment>
            <header className="py-2">
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
            <div className="h-full flex flex-col overflow-auto pr-2 rounded-md">
                <div>
                    <section>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                                    <h3 className="text-primary-950 font-black uppercase">
                                        Exchange
                                    </h3>
                                    <p className="text-sm text-slate-500 ">
                                        NASDAQ/NMS (GLOBAL MARKET)
                                    </p>
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
                                    <h3 className="text-primary-950 font-black uppercase">
                                        Currency
                                    </h3>
                                    <p className="text-sm text-slate-500 ">USD</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="overflow-hidden">
                        <section className="grid grid-cols-6 gap-4 my-4">
                            <div className="col-span-6 md:col-span-4 bg-white rounded p-6 flex flex-col justify-between">
                                <h3 className="text-primary-950 font-black uppercase text-2xl">
                                    $ 78,560
                                </h3>
                                <div className="h-3/4">
                                    <ResponsiveContainer width="100%">
                                        <AreaChart
                                            width={100}
                                            height={250}
                                            data={data}
                                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="colorPv"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="5%"
                                                        stopColor="#5783BC"
                                                        stopOpacity={0.8}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#5783BC"
                                                        stopOpacity={0.1}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <XAxis
                                                dataKey="name"
                                                stroke="#b0c7e6"
                                                tick={{
                                                    fill: '#3E5F8A',
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                }}
                                                tickLine={{ stroke: '#fffff' }}
                                            />
                                            <YAxis
                                                stroke="#b0c7e6"
                                                tick={{
                                                    fill: '#3E5F8A',
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                }}
                                                tickLine={{ stroke: '#fffff' }}
                                            />
                                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                            <Tooltip content={<CustomToolTip />} />

                                            <Area
                                                type="monotone"
                                                dataKey="pv"
                                                stroke="#5384c4"
                                                strokeWidth={2}
                                                fillOpacity={1}
                                                fill="url(#colorPv)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-2 bg-white rounded p-6">
                                <h3 className="text-primary-950 font-black uppercase text-sm">
                                    New Order
                                </h3>
                                <section className="h-full">
                                    <div>
                                        <div className="pt-8">
                                            <InputField
                                                id="quantity"
                                                name="quantity"
                                                label="Quantity"
                                                placeholder=""
                                                type="number"
                                                max="1000"
                                                min="1"
                                                groupFormClassList="flex-1"
                                                required
                                                key="first_name"
                                                register={register('firstName')}
                                                hasError={false}
                                                errorMessage=""
                                            />
                                        </div>
                                        <div className="flex justify-between border-b-2 border-primary-100 my-5">
                                            <p className="text-primary-950 font-medium">Value</p>
                                            <p className="text-primary-950 font-black uppercase text-lg">
                                                $250
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <button
                                            type="submit"
                                            className="col-span-1 uppercase flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5"
                                        >
                                            Buy
                                        </button>
                                        <button
                                            type="submit"
                                            className="col-span-1 uppercase flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5"
                                        >
                                            Sell
                                        </button>
                                        <button
                                            type="submit"
                                            className="col-span-2 uppercase text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-5 py-2.5 mt-5  focus:outline-none"
                                        >
                                            Trade Option
                                        </button>
                                    </div>
                                </section>
                            </div>
                            <div className="col-span-6 md:col-span-4 bg-white rounded p-6 text-justify">
                                <h3 className="text-primary-950 font-black uppercase text-sm">
                                    BTC to USD Converter
                                </h3>
                                <div className="bg-primary-200 rounded-lg my-4 flex justify-between relative">
                                    <div className="p-5 flex-1">
                                        <h4 className="font-extrabold text-primary-900 text-lg">
                                            1 unit - Apple Inc
                                        </h4>
                                    </div>
                                    <div className="bg-white rounded-full h-10 w-10 flex justify-center content-center flex-wrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#3E5F8A"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1 p-5 border-l-2 border-white text-right">
                                        <h5 className="font-extrabold text-primary-900 text-lg">
                                            $399,00
                                        </h5>
                                    </div>
                                </div>
                                <h3 className="text-primary-950 font-black uppercase text-sm">
                                    What is Apple Inc
                                </h3>
                                <p className="text-primary-800 text-justify">
                                    Apple Inc. is an American multinational technology company
                                    headquartered in Cupertino, California, that designs, develops,
                                    and sells consumer electronics, computer software, and online
                                    services. It is considered one of the Big Four technology
                                    companies, alongside Amazon, Google, and Microsoft. The
                                    company's hardware products include the iPhone smartphone, the
                                    iPad tablet computer, the Mac personal computer, the iPod
                                    portable media player, the Apple Watch smartwatch, the Apple TV
                                    digital media player, the AirPods wireless earbuds and the
                                    HomePod smart speaker. Apple's software includes the macOS, iOS,
                                    iPadOS, watchOS, and tvOS operating systems, the iTunes media
                                    player, the Safari web browser, the Shazam acoustic fingerprint
                                    utility, and the iLife and iWork creativity and productivity
                                    suites, as well as professional applications like Final Cut Pro,
                                    Logic Pro, and Xcode. Its online services include the iTunes
                                    Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+,
                                    iMessage, and iCloud. Other services include Apple Store, Genius
                                    Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.
                                </p>
                            </div>
                            <div className="col-span-6 md:col-span-2 bg-white rounded p-6">
                                <h3 className="text-primary-950 font-black uppercase text-sm">
                                    Recent News
                                </h3>
                                <section>
                                    <Link
                                        to="jk"
                                        target="_blank"
                                        className="flex mt-3 bg-slate-100 rounded cursor-pointer"
                                    >
                                        <img
                                            src="https://images.mktw.net/im-808787/social"
                                            alt=""
                                            srcSet=""
                                            className="rounded-l w-20 max-w-lg object-cover"
                                        />
                                        <div className="overflow-hidden ml-1 p-2">
                                            <h5 className="text-primary-950 text-sm font-black uppercase line-clamp-2 leading-5">
                                                Geologists Utilize Artificial Intelligence to
                                                Enhance Landslide Prediction
                                            </h5>
                                            <p className="text-xs text-slate-400 italic">
                                                02/07/2023
                                            </p>

                                            <p className="text-xs text-slate-400 pt-2">
                                                <span className="text-slate-600 font-medium ">
                                                    Top News
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="jk"
                                        target="_blank"
                                        className="flex mt-3 bg-slate-100 rounded cursor-pointer"
                                    >
                                        <img
                                            src="https://images.mktw.net/im-808787/social"
                                            alt=""
                                            srcSet=""
                                            className="rounded-l w-20 max-w-lg object-cover"
                                        />
                                        <div className="overflow-hidden ml-1 p-2">
                                            <h5 className="text-primary-950 text-sm font-black uppercase line-clamp-2 leading-5">
                                                Geologists Utilize Artificial Intelligence to
                                                Enhance Landslide Prediction
                                            </h5>
                                            <p className="text-xs text-slate-400 italic">
                                                02/07/2023
                                            </p>

                                            <p className="text-xs text-slate-400 pt-2">
                                                <span className="text-slate-600 font-medium ">
                                                    Top News
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="jk"
                                        target="_blank"
                                        className="flex mt-3 bg-slate-100 rounded cursor-pointer"
                                    >
                                        <img
                                            src="https://images.mktw.net/im-808787/social"
                                            alt=""
                                            srcSet=""
                                            className="rounded-l w-20 max-w-lg object-cover"
                                        />
                                        <div className="overflow-hidden ml-1 p-2">
                                            <h5 className="text-primary-950 text-sm font-black uppercase line-clamp-2 leading-5">
                                                Geologists Utilize Artificial Intelligence to
                                                Enhance Landslide Prediction
                                            </h5>
                                            <p className="text-xs text-slate-400 italic">
                                                02/07/2023
                                            </p>

                                            <p className="text-xs text-slate-400 pt-2">
                                                <span className="text-slate-600 font-medium ">
                                                    Top News
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="jk"
                                        target="_blank"
                                        className="flex mt-3 bg-slate-100 rounded cursor-pointer"
                                    >
                                        <img
                                            src="https://images.mktw.net/im-808787/social"
                                            alt=""
                                            srcSet=""
                                            className="rounded-l w-20 max-w-lg object-cover"
                                        />
                                        <div className="overflow-hidden ml-1 p-2">
                                            <h5 className="text-primary-950 text-sm font-black uppercase line-clamp-2 leading-5">
                                                Geologists Utilize Artificial Intelligence to
                                                Enhance Landslide Prediction
                                            </h5>
                                            <p className="text-xs text-slate-400 italic">
                                                02/07/2023
                                            </p>

                                            <p className="text-xs text-slate-400 pt-2">
                                                <span className="text-slate-600 font-medium ">
                                                    Top News
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
