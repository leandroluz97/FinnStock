import React from 'react';
import { BuyOrdersTable } from '../components/BuyOrdersTable';
import { ContentLayout } from '../../../components/Layout/ContentLayout';

export const BuyOrders = () => {
    return (
        <ContentLayout title="Buy Orders" description="">
            <div className="h-full flex flex-col  overflow-hidden">
                <BuyOrdersTable />
            </div>
        </ContentLayout>
    );
};
