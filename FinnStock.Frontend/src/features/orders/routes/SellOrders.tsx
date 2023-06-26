import React from 'react';
import { ContentLayout } from '../../../components/Layout/ContentLayout';
import { SellOrdersTable } from '../components/SellOrdersTable';

export const SellOrders = () => {
    return (
        <ContentLayout title="Buy Orders" description="">
            <div className="h-full flex flex-col  overflow-hidden">
                <SellOrdersTable />
            </div>
        </ContentLayout>
    );
};
