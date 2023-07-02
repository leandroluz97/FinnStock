import React from 'react';
import { ChartBarIcon, WalletIcon, ShareIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { Metric } from './metric';

export const Metrics = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Metric.Root>
                <Metric.Icon Icon={ChartBarIcon} className="w-12 p-3 " />
                <Metric.Title title="EXCHANGE" className="mt-4" />
                <Metric.Content content="NASDAQ/NMS (GLOBAL MARKET)" />
            </Metric.Root>
            <Metric.Root>
                <Metric.Icon Icon={WalletIcon} className="w-12 p-3 " />
                <Metric.Title title="Market Capitalization" className="mt-4" />
                <Metric.Content content="1415993" />
            </Metric.Root>
            <Metric.Root>
                <Metric.Icon Icon={ShareIcon} className="w-12 p-3 " />
                <Metric.Title title="Share Outstanding" className="mt-4" />
                <Metric.Content content="4375.47998046875" />
            </Metric.Root>
            <Metric.Root>
                <Metric.Icon Icon={BanknotesIcon} className="w-12 p-3 " />
                <Metric.Title title="Currency" className="mt-4" />
                <Metric.Content content="USD" />
            </Metric.Root>
        </div>
    );
};
