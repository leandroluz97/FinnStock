import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Search } from './Search';
import { URLSearch } from '../../../utils/URLSearch';
import { useBuyOrders } from '../api/getBuyStocks';
import { EmptyState } from '../../../components/States/EmptyState';
import { Spinner } from '../../../components/Loading';

export const BuyOrdersTable = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { userId } = useParams();
    const QUERIES = URLSearch.queries();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';
    const { data, isLoading } = useBuyOrders({ userId });

    if (isLoading)
        return (
            <div className="h-full flex flex-col content-center justify-center flex-wrap">
                <Spinner />
            </div>
        );
    if (data == null) return null;
    if (data.length === 0) return <EmptyState />;

    let dataToDisplay = data;
    if (QUERIES.searchText !== null) {
        dataToDisplay = data.filter((order) =>
            order.symbol.toLowerCase().includes(
                QUERIES.searchText
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
            )
        );
    }

    return (
        <React.Fragment>
            <Search />
            {dataToDisplay.length === 0 ? (
                <EmptyState />
            ) : (
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
                                        <div className="flex items-center ">
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
                            {dataToDisplay.map((order) => (
                                <tr
                                    key={order.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-2 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                                    >
                                        <img
                                            src={order.logo}
                                            alt={order.symbol}
                                            className="rounded-xl w-10 max-w-lg"
                                        />
                                    </th>
                                    <th
                                        scope="row"
                                        className="px-6 py-2 font-medium text-primary-900 whitespace-nowrap dark:text-white"
                                    >
                                        {order.symbol}
                                    </th>
                                    <td className="px-6 py-4">{order.amount / order.quantity}</td>
                                    <td className="px-6 py-4">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        {new Intl.DateTimeFormat('en-US').format(
                                            new Date(order.createdAt)
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </React.Fragment>
    );
};
