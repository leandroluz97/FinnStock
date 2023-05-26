import React from 'react';
import { NavLink } from 'react-router-dom';
import FinnstockLogo from '../../assets/finnstock-log.svg';

export const MainLayout = ({ children }) => {
    return (
        <div className="h-screen p-2 bg-slate-200">
            <section className="flex h-full">
                <aside className="bg-white rounded-lg">
                    <div className="w-24 h-full flex flex-col">
                        <div className="m-3 flex justify-center items-center">
                            <img src={FinnstockLogo} alt="finnstock" className="w-12 text-center" />
                        </div>
                        <nav className="mt-10  h-full flex flex-col justify-between ">
                            <header>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                            </header>
                            <div>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                            </div>
                        </nav>
                    </div>
                </aside>
                <main className="w-full flex flex-col">
                    <header className="ml-2">
                        <section className="bg-white rounded-lg p-4">
                            <div className="w-100 flex justify-between">
                                <h1 className="text-3xl font-bold text-primary-900">Finnstock</h1>
                                <div className="bg-slate-200 p-2 rounded">
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.06658 12.7417C0.865117 14.0235 1.76581 14.9132 2.8686 15.3566C7.09647 17.0566 12.98 17.0566 17.2079 15.3566C18.3107 14.9132 19.2113 14.0235 19.0099 12.7417C18.8861 11.954 18.2739 11.298 17.8203 10.6575C17.2262 9.80818 17.1671 8.88183 17.1671 7.89629C17.1671 4.08757 13.9754 1 10.0382 1C6.10109 1 2.9094 4.08757 2.9094 7.89629C2.90932 8.88183 2.85028 9.80818 2.25618 10.6575C1.8026 11.298 1.19039 11.954 1.06658 12.7417Z"
                                            stroke="#3E5F8A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.19607 19C7.9503 19.5891 8.9463 19.9474 10.0382 19.9474C11.13 19.9474 12.126 19.5891 12.8803 19"
                                            stroke="#3E5F8A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </section>
                    </header>

                    <section className="ml-2 mt-2 rounded-md flex-1">
                        <div className="">
                            <p>content</p>
                            {children}
                        </div>
                    </section>
                </main>
            </section>
        </div>
    );
};

function DashboardIcon() {
    // 3E5F8A
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="1" width="8" height="10" rx="2" stroke="#517ab1" strokeWidth="1.5" />
            <rect x="1" y="15" width="8" height="6" rx="2" stroke="#517ab1" strokeWidth="1.5" />
            <rect
                x="12.9995"
                y="11"
                width="8"
                height="10"
                rx="2"
                stroke="#517ab1"
                strokeWidth="1.5"
            />
            <rect
                x="12.9995"
                y="1"
                width="8"
                height="6"
                rx="2"
                stroke="#517ab1"
                strokeWidth="1.5"
            />
        </svg>
    );
}
