import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Tab = () => {
    const { pathname } = useLocation();
    console.log(pathname.endsWith('stocks'));

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-2">
            <ul className="flex flex-wrap -mb-px border-b-2 border-primary-300 ">
                <li className="mr-2 list-none relative">
                    <NavLink
                        to=""
                        className={({ isActive, isPending }) =>
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
                        className={({ isActive, isPending }) =>
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
                        className={({ isActive, isPending }) =>
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
                        className={({ isActive, isPending }) =>
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
            </ul>
        </div>
    );
};
