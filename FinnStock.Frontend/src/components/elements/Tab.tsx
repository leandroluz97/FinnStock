import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Tab = () => {
    const { pathname } = useLocation();

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-2">
            <div className="h-full flex flex-wrap justify-center md:justify-between -mb-px border-b-2 border-primary-300">
                <div className="flex flex-wrap justify-center md:justify-between">
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to=""
                            className={() =>
                                `inline-block p-4 pt-3 border-b-3 rounded-t-lg text-primary-800 ${
                                    pathname.endsWith('stocks')
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                        >
                            Popular
                        </NavLink>
                    </li>
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to="favorite"
                            className={({ isActive }) =>
                                `inline-block p-4 pt-3 border-b-2 rounded-t-lg text-primary-800 ${
                                    isActive
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                            aria-current="page"
                        >
                            Favorite
                        </NavLink>
                    </li>
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to="up"
                            className={({ isActive }) =>
                                `inline-block p-4 pt-3 border-b-2 rounded-t-lg text-primary-800 ${
                                    isActive
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                        >
                            Up
                        </NavLink>
                    </li>
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to="down"
                            className={({ isActive }) =>
                                `inline-block p-4 pt-3 border-b-2 rounded-t-lg text-primary-800 ${
                                    isActive
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                        >
                            Down
                        </NavLink>
                    </li>
                </div>
                <div>
                    <div className="mr-2 list-none w-full relative">
                        <input
                            type="text"
                            placeholder="Search stock by symbol"
                            name="search"
                            id="search"
                            className="w-96 bg-white  border-white border-2 text-primary-900 text-sm rounded focus:ring-primary-200 focus:border-primary-500 focus:border-2 block p-2.5 pl-9 placeholder-primary-500"
                        />
                        <span className="absolute bottom-0 left-0 p-3 text-sm font-medium text-white rounded-r">
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.7119 15.75L12.2119 11.25M13.7119 7.5C13.7119 8.18944 13.5761 8.87213 13.3123 9.50909C13.0484 10.146 12.6617 10.7248 12.1742 11.2123C11.6867 11.6998 11.108 12.0865 10.471 12.3504C9.83404 12.6142 9.15135 12.75 8.46191 12.75C7.77247 12.75 7.08979 12.6142 6.45283 12.3504C5.81587 12.0865 5.23711 11.6998 4.7496 11.2123C4.2621 10.7248 3.87538 10.146 3.61155 9.50909C3.34771 8.87213 3.21191 8.18944 3.21191 7.5C3.21191 6.10761 3.76504 4.77226 4.7496 3.78769C5.73417 2.80312 7.06953 2.25 8.46191 2.25C9.8543 2.25 11.1897 2.80312 12.1742 3.78769C13.1588 4.77226 13.7119 6.10761 13.7119 7.5Z"
                                    stroke="#5783BC"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
