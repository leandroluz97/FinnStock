import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../../utils/debounce';
import { URLSearch } from '../../../utils/URLSearch';

export const Search = () => {
    const QUERIES = URLSearch.queries();
    const [searchParams, setSearchParams] = useSearchParams();
    const DEBOUNCE_TIME = 1000;
    const setSearchText = debounce(searchParams, setSearchParams, DEBOUNCE_TIME);

    return (
        <div className="relative sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between pb-4">
                <div className="order-2  md:order-1">
                    <button
                        id="dropdownRadioButton"
                        data-dropdown-toggle="dropdownRadio"
                        className="inline-flex items-center text-primary-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                    >
                        <svg
                            className="w-4 h-4 mr-2 text-gray-400"
                            aria-hidden="true"
                            fill="#5783BC"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Last 30 days
                        <svg
                            className="w-3 h-3 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdownRadio"
                        className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="top"
                        style={{
                            position: 'absolute',
                            inset: 'auto auto 0px 0px',
                            margin: '0px',
                            transform: 'translate3d(522.5px, 3847.5px, 0px)',
                        }}
                    >
                        <ul
                            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioButton"
                        >
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="filter-radio-example-1"
                                        type="radio"
                                        value=""
                                        name="filter-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="filter-radio-example-1"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Last day
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        defaultValue={QUERIES.searchText || ''}
                                        onChange={(e) => {
                                            setSearchText(['searchText', e.target.value]);
                                        }}
                                        id="filter-radio-example-2"
                                        type="radio"
                                        name="filter-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="filter-radio-example-2"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Last 7 days
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="filter-radio-example-3"
                                        type="radio"
                                        value=""
                                        name="filter-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="filter-radio-example-3"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Last 30 days
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="filter-radio-example-4"
                                        type="radio"
                                        value=""
                                        name="filter-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="filter-radio-example-4"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Last month
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="filter-radio-example-5"
                                        type="radio"
                                        value=""
                                        name="filter-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="filter-radio-example-5"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Last year
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="flex justify-end flex-1 mr-2 md:mr-0 order-1 md:order-2 list-none relative">
                    <div className="relative">
                        <input
                            defaultValue={QUERIES.searchText || ''}
                            onChange={(e) => {
                                setSearchText(['searchText', e.target.value]);
                            }}
                            type="text"
                            placeholder="Search stock by symbol"
                            name="search"
                            id="search"
                            className="max-w-lg bg-white border-white border-2 text-primary-900 text-sm rounded-lg focus:ring-primary-200 focus:border-primary-500 focus:border-2 block p-2.5 pl-9 placeholder-primary-500"
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
