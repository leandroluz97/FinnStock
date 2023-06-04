import React from 'react';
import { StocksList } from '../components/StocksList';
import { Breadcrumb } from '../../../components/Elements/Breadcrumb';
import { Tab } from '../../../components/Elements/Tab';
import { ContentLayout } from '../../../components/Layout/ContentLayout';

export const Stocks = () => {
    return (
        <ContentLayout title="stocks" description="">
            <div className="flex flex-col justify-between overflow-hidden">
                <StocksList />
            </div>
        </ContentLayout>
    );
};
