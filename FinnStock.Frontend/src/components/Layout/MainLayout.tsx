import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import FinnstockLogo from '../../assets/finnstock-log.svg';
import ProfilePicture from '../../assets/profile.svg';

export const MainLayout = ({ children }) => {
    const location = useLocation();
    const routes = [
        {
            path: 'dashboard',
            label: 'Dashboard',
            icon: <DashboardIcon />,
        },
        {
            path: 'news',
            label: 'News',
            icon: <NewIcon />,
        },
        {
            path: 'orders',
            label: 'Orders',
            icon: <OrderItem />,
        },
    ];

    return (
        <div className="h-screen  bg-slate-200">
            <section className="flex h-full">
                <aside className="bg-white ">
                    <div className="w-24 h-full flex flex-col  border-r-2 border-slate-200">
                        <div className="m-3 flex justify-center items-center">
                            <img src={FinnstockLogo} alt="finnstock" className="w-12 text-center" />
                        </div>
                        <nav className="mt-10  h-full flex flex-col justify-between ">
                            <header>
                                {routes.map((route) => (
                                    <li
                                        key={route.path}
                                        data-tooltip-target={`tooltip-animation-${route.path}`}
                                        data-tooltip-placement="right"
                                        className="list-none relative my-2"
                                    >
                                        <NavLink
                                            to={route.path}
                                            className={({ isActive, isPending }) =>
                                                `m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100${
                                                    isActive
                                                        ? ' bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg'
                                                        : ''
                                                }`
                                            }
                                        >
                                            {route.icon}
                                        </NavLink>
                                        <div
                                            id={`tooltip-animation-${route.path}`}
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block p-3 text-sm font-medium text-white transition-opacity duration-300 bg-primary-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-primary-950"
                                        >
                                            {route.label}
                                            <div className="tooltip-arrow" data-popper-arrow />
                                        </div>
                                    </li>
                                ))}
                            </header>
                            <div>
                                <li
                                    data-tooltip-target="tooltip-animation-settings"
                                    data-tooltip-placement="right"
                                    className="list-none relative my-2"
                                >
                                    <NavLink
                                        to="settings"
                                        className={({ isActive, isPending }) =>
                                            `m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100${
                                                isActive
                                                    ? ' bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg'
                                                    : ''
                                            }`
                                        }
                                    >
                                        <SettingsIcon />
                                        <div
                                            id="tooltip-animation-settings"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block p-3 text-sm font-medium text-white transition-opacity duration-300 bg-primary-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-primary-950"
                                        >
                                            Settings
                                            <div className="tooltip-arrow" data-popper-arrow />
                                        </div>
                                    </NavLink>
                                </li>
                                <li
                                    data-tooltip-target="tooltip-animation-logout"
                                    data-tooltip-placement="right"
                                    className="list-none relative my-2"
                                >
                                    <NavLink
                                        to="logout"
                                        className={({ isActive, isPending }) =>
                                            `m-3 p-3 py-5 rounded-md flex justify-center content-center hover:bg-slate-100${
                                                isActive
                                                    ? ' bg-slate-100 before:absolute before:w-1 before:h-full before:bg-primary-800 before:right-0 before:top-0 before:rounded-s-lg'
                                                    : ''
                                            }`
                                        }
                                    >
                                        <LogoutIcon />
                                        <div
                                            id="tooltip-animation-logout"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block p-3 text-sm font-medium text-white transition-opacity duration-300 bg-primary-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-primary-950"
                                        >
                                            Logout
                                            <div className="tooltip-arrow" data-popper-arrow />
                                        </div>
                                    </NavLink>
                                </li>
                            </div>
                        </nav>
                    </div>
                </aside>
                <main className="w-full flex flex-col">
                    <header className="">
                        <section className="bg-white p-3">
                            <div className="w-100 flex justify-between items-center">
                                <h1 className="text-3xl font-bold text-primary-900">Finnstock</h1>
                                <div className="flex ">
                                    <div className="flex bg-slate-100 items-center rounded-full pl-2 mx-3">
                                        <p className="px-2 text-primary-900 font-medium">
                                            Leandro Luz
                                        </p>
                                        <img
                                            src={ProfilePicture}
                                            alt="profile"
                                            className="w-12 p-1"
                                        />
                                    </div>
                                    <div className="rounded-full bg-slate-100 p-2 px-4 flex justify-center items-center">
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
                            </div>
                        </section>
                    </header>

                    <section className="m-3 flex-1">
                        <div className="">
                            {/* <p>content</p> */}
                            {/* {children} */}
                            <Outlet />
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

function NewIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.73633 16.2631L5.73633 12.0526"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M11 16.2632L11 5.73688"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M16.2637 16.2632L16.2637 9.94739"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M1 11C1 6.28596 1 3.92893 2.46447 2.46447C3.92893 1 6.28596 1 11 1C15.714 1 18.0711 1 19.5355 2.46447C21 3.92893 21 6.28596 21 11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28596 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11Z"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function OrderItem() {
    return (
        <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.29688 17.4706H11.0028M6.29688 11.5882H15.7086"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M5.71048 2.76468C3.88013 2.81959 2.78885 3.02331 2.03374 3.77912C1 4.81382 1 6.47915 1 9.80981L1 17.464C1 20.7946 1 22.46 2.03374 23.4947C3.06748 24.5294 4.73126 24.5294 8.05882 24.5294L13.9412 24.5294C17.2687 24.5294 18.9325 24.5294 19.9663 23.4947C21 22.46 21 20.7946 21 17.464V9.80981C21 6.47915 21 4.81382 19.9663 3.77912C19.2112 3.02331 18.1199 2.81959 16.2895 2.76468"
                stroke="#517ab1"
                strokeWidth="1.5"
            />
            <path
                d="M5.70605 3.05882C5.70605 1.92177 6.62782 1 7.76488 1H14.2355C15.3725 1 16.2943 1.92177 16.2943 3.05882C16.2943 4.19588 15.3725 5.11765 14.2355 5.11765H7.76488C6.62782 5.11765 5.70605 4.19588 5.70605 3.05882Z"
                fill="#517ab1"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function SettingsIcon() {
    return (
        <svg
            width="22"
            height="25"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.75 23.5L4.75 19.75"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.25 23.5L17.25 16"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.25 4.75L17.25 1"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.75 8.5L4.75 1"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.75 19.75C3.58515 19.75 3.00272 19.75 2.54329 19.5597C1.93072 19.306 1.44404 18.8193 1.1903 18.2067C1 17.7473 1 17.1649 1 16C1 14.8351 1 14.2527 1.1903 13.7933C1.44404 13.1807 1.93072 12.694 2.54329 12.4403C3.00272 12.25 3.58515 12.25 4.75 12.25C5.91485 12.25 6.49728 12.25 6.95671 12.4403C7.56928 12.694 8.05596 13.1807 8.3097 13.7933C8.5 14.2527 8.5 14.8351 8.5 16C8.5 17.1649 8.5 17.7473 8.3097 18.2067C8.05596 18.8193 7.56928 19.306 6.95671 19.5597C6.49728 19.75 5.91485 19.75 4.75 19.75Z"
                stroke="#517ab1"
                strokeWidth="1.5"
            />
            <path
                d="M17.25 12.25C16.0851 12.25 15.5027 12.25 15.0433 12.0597C14.4307 11.806 13.944 11.3193 13.6903 10.7067C13.5 10.2473 13.5 9.66485 13.5 8.5C13.5 7.33515 13.5 6.75272 13.6903 6.29329C13.944 5.68072 14.4307 5.19404 15.0433 4.9403C15.5027 4.75 16.0851 4.75 17.25 4.75C18.4149 4.75 18.9973 4.75 19.4567 4.9403C20.0693 5.19404 20.556 5.68072 20.8097 6.29329C21 6.75272 21 7.33515 21 8.5C21 9.66485 21 10.2473 20.8097 10.7067C20.556 11.3193 20.0693 11.806 19.4567 12.0597C18.9973 12.25 18.4149 12.25 17.25 12.25Z"
                stroke="#517ab1"
                strokeWidth="1.5"
            />
        </svg>
    );
}

function LogoutIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.3333 17.25C14.2516 19.3077 12.5368 21.0549 10.2396 20.9987C9.70516 20.9856 9.04459 20.7993 7.72347 20.4266C4.54401 19.5298 1.78395 18.0226 1.12173 14.6462C1 14.0255 1 13.3271 1 11.9303L1 10.0697C1 8.6729 1 7.9745 1.12173 7.35384C1.78395 3.97739 4.54402 2.47018 7.72347 1.57336C9.0446 1.20072 9.70516 1.01439 10.2396 1.00132C12.5368 0.945122 14.2516 2.6923 14.3333 4.75001"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M21.0001 11H8.77783M21.0001 11C21.0001 10.222 18.7842 8.76837 18.2223 8.22222M21.0001 11C21.0001 11.778 18.7842 13.2316 18.2223 13.7778"
                stroke="#517ab1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
