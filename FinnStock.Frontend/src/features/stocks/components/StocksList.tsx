import React from 'react';
import { Card } from './Card';
import { useStocks } from '../api/getStocks';
import { Spinner } from '../../../components/Elements';
import { usePagination } from '../../../hooks/usePagination';
import { Pagination } from '../../../components/Elements/Pagination';

export const StocksList = () => {
    const { pageNumber, pageSize } = usePagination();
    const { data, isLoading } = useStocks({ pageSize, pageNumber });
    const items = data?.items;

    return (
        <React.Fragment>
            <div className="h-full overflow-hidden rounded-md">
                <div className="h-full overflow-auto">
                    {!isLoading ? (
                        <div className="h-full flex flex-col justify-center items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
                            {items != null &&
                                items.map((stock) => (
                                    <Card
                                        key={stock.symbol}
                                        currency={stock.currency}
                                        description={stock.description}
                                        symbol={stock.symbol}
                                        displaySymbol=""
                                        figi=""
                                        type=""
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </div>
            <Pagination
                pageNumber={pageNumber}
                pageSize={pageSize}
                totalPages={data ? data.totalPages : 1}
            />
        </React.Fragment>
    );
};
