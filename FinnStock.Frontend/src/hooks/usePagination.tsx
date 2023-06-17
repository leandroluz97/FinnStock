import React from 'react';
import { useLocation } from 'react-router-dom';

export const usePagination = () => {
    const { search } = useLocation();
    const searchQueries = new URLSearchParams(search);
    const page = searchQueries.get('pageNumber') || '1';
    const size = searchQueries.get('pageSize') || '100';
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(size, 10);

    return {
        pageNumber,
        pageSize,
    };
};
