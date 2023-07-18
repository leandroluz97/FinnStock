import React from 'react';
import { ChartBarIcon, WalletIcon, ShareIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { Metric } from './metric';
import { useStockProfile } from '../api/getStockProfile';

export const Metrics = () => {
    const { symbol } = useParams<{ symbol: string }>();
    const { data } = useStockProfile({ symbol: symbol as unknown as string });
    if (data === undefined) return null;

    return (
        <React.Fragment>
            <Metric.Root>
                <Metric.Icon Icon={ChartBarIcon} className="w-12 p-3 " />
                <Metric.Title title="EXCHANGE" className="mt-4" />
                <Metric.Content content={data.exchange} />
            </Metric.Root>
            <Metric.Root>
                <Metric.Icon Icon={WalletIcon} className="w-12 p-3 " />
                <Metric.Title title="Market Capitalization" className="mt-4" />
                <Metric.Content
                    content={new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(data.marketCapitalization)}
                />
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
        </React.Fragment>
    );
};
