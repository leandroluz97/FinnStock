import React from 'react';
import { NavLink } from 'react-router-dom';

export const Breadcrumb = () => {
    return (
        <nav className="flex my-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <NavLink
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-primary-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <NavLink
                            href="#"
                            className="ml-1 text-sm font-medium text-primary-700 hover:text-primary-800 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                            Projects
                        </NavLink>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-primary-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-primary-600 md:ml-2 dark:text-gray-400">
                            Flowbite
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};
