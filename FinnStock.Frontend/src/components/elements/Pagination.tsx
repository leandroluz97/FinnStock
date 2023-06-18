import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { URLSearch } from '../../utils/URLSearch';

type PaginationProps = {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
};
export const Pagination = ({ pageNumber, pageSize, totalPages }: PaginationProps) => {
    const pagination = useMemo(() => {
        let pageNumbers = [1, 2, 3];
        if (totalPages > pageNumber && pageNumber > 1)
            pageNumbers = [pageNumber - 1, pageNumber, pageNumber + 1];
        return pageNumbers;
    }, [pageNumber, totalPages]);

    return (
        <nav className="flex justify-center align-center pt-3" aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <Link
                        to={URLSearch.set({ pageNumber: pageNumber > 1 ? pageNumber - 1 : 1 })}
                        className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </li>
                {pagination.map((page) => (
                    <li key={page}>
                        <Link
                            to={URLSearch.set({ pageNumber: page })}
                            className={`px-3 py-2 leading-tight border border-gray-300 ${
                                page === pageNumber
                                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                            }`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        to={URLSearch.set({
                            pageNumber: totalPages > pageNumber ? pageNumber + 1 : pageNumber,
                        })}
                        className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
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
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
