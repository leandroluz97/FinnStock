import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tab = () => {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-2">
            <ul className="flex flex-wrap -mb-px border-b-2 border-primary-300 ">
                <li className="mr-2">
                    <NavLink
                        to=""
                        className={({ isActive, isPending }) =>
                            `inline-block p-4 border-b-2 rounded-t-lg ${
                                isActive
                                    ? ' border-transparent'
                                    : ' text-primary-900 border-blue-600 active'
                            }`
                        }
                    >
                        Popular
                    </NavLink>
                </li>
                <li className="mr-2">
                    <NavLink
                        to="favorite"
                        className={({ isActive, isPending }) =>
                            `inline-block p-4 border-b-2 rounded-t-lg ${
                                isActive
                                    ? ' text-primary-900 border-blue-600 active'
                                    : ' border-transparent'
                            }`
                        }
                        aria-current="page"
                    >
                        Favorite
                    </NavLink>
                </li>
                <li className="mr-2">
                    <NavLink
                        to="up"
                        className={({ isActive, isPending }) =>
                            `inline-block p-4 border-b-2 rounded-t-lg ${
                                isActive
                                    ? ' text-primary-900 border-blue-600 active'
                                    : ' border-transparent'
                            }`
                        }
                    >
                        Up
                    </NavLink>
                </li>
                <li className="mr-2">
                    <NavLink
                        to="down"
                        className={({ isActive, isPending }) =>
                            `inline-block p-4 border-b-2 rounded-t-lg ${
                                isActive
                                    ? ' text-primary-900 border-blue-600 active'
                                    : ' border-transparent'
                            }`
                        }
                    >
                        Down
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                        Disabled
                    </NavLink>
                </li> */}
            </ul>
        </div>
    );
};
