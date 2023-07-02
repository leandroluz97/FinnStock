import React from 'react';
import { ChartBarIcon, WalletIcon, ShareIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { InputField } from '../../../components/Form';
import { Metric } from './metric';
import { NewOrder } from './NewOrder';

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
                <div className=" my-2 flex content-center">
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
                        <span className="saturate-0">🏅</span>
                    </p>
                </div>
                <div className="flex">
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
                </div>
            </header>
            <div className="h-full flex flex-col overflow-auto pr-2 rounded-md">
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Metric.Root>
                            <Metric.Icon Icon={ChartBarIcon} className="w-12 p-3 " />
                            <Metric.Title title="EXCHANGE" className="mt-4" />
                            <Metric.Content content="NASDAQ/NMS (GLOBAL MARKET)" />
                        </Metric.Root>
                        <Metric.Root>
                            <Metric.Icon Icon={WalletIcon} className="w-12 p-3 " />
                            <Metric.Title title="Market Capitalization" className="mt-4" />
                            <Metric.Content content="1415993" />
                        </Metric.Root>
                        <Metric.Root>
                            <Metric.Icon Icon={ShareIcon} className="w-12 p-3 " />
                            <Metric.Title title="Share Outstanding" className="mt-4" />
                            <Metric.Content content="4375.47998046875" />
                        </Metric.Root>
                        <Metric.Root>
                            <Metric.Icon Icon={BanknotesIcon} className="w-12 p-3 " />
                            <Metric.Title title="Currency" className="mt-4" />
                            <Metric.Content content="USD" />
                        </Metric.Root>
                    </div>

                    <div className="">
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
                                <NewOrder />
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
