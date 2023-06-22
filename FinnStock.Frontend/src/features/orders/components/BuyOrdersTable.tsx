import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from './Search';
import { URLSearch } from '../../../utils/URLSearch';

export const BuyOrdersTable = () => {
    const QUERIES = URLSearch.queries();
    const [searchParams, setSearchParams] = useSearchParams();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';

    return (
        <React.Fragment>
            <Search />
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-primary-900 ">
                    <thead className="text-xs text-primary-950 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                        <tr>
                            <th scope="col" className="px-6 py-3" />
                            <th scope="col" className="px-6 py-3">
                                <Link
                                    to={URLSearch.set({
                                        sortBy: 'stock',
                                        sortDesc: QUERIES.sortBy === 'stock' ? desc : 'false',
                                    })}
                                >
                                    <div className="flex items-center">
                                        Stock
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 ml-1"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                        </svg>
                                    </div>
                                </Link>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <Link
                                    to={URLSearch.set({
                                        sortBy: 'amount',
                                        sortDesc: QUERIES.sortBy === 'amount' ? desc : 'false',
                                    })}
                                >
                                    <div className="flex items-center">
                                        Amount
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 ml-1"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                        </svg>
                                    </div>
                                </Link>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <Link
                                    to={URLSearch.set({
                                        sortBy: 'total',
                                        sortDesc: QUERIES.sortBy === 'total' ? desc : 'false',
                                    })}
                                >
                                    <div className="flex items-center">
                                        Total
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 ml-1"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                        </svg>
                                    </div>
                                </Link>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <Link
                                    to={URLSearch.set({
                                        sortBy: 'date',
                                        sortDesc: QUERIES.sortBy === 'date' ? desc : 'false',
                                    })}
                                >
                                    <div className="flex items-center">
                                        Transaction Date
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 ml-1"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                        </svg>
                                    </div>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};