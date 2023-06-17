import React from 'react';
import { StocksList } from '../components/StocksList';
import { ContentLayout } from '../../../components/Layout/ContentLayout';

export const Stocks = () => {
    return (
        <ContentLayout title="stocks" description="">
            <div className="h-full flex flex-col justify-between overflow-hidden">
                <StocksList />
            </div>
        </ContentLayout>
    );
};
