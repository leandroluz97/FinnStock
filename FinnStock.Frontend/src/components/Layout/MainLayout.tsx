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
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                                <li className="list-none relative my-2">
                                    <NavLink
                                        to="/dashboard"
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                            </header>
                            <div>
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
                                        className="m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg"
                                    >
                                        <DashboardIcon />
                                    </NavLink>
                                </li>
                            </div>
                        </nav>
                    </div>
                </aside>
                <header>
                    <section className="bg-white rounded-lg">
                        <div className="w-100">Stock</div>
                    </section>
                </header>
                <main>
                    {/* <p>content</p>
                    {children} */}
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
