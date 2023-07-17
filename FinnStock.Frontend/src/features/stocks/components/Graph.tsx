import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import * as R from 'ramda';
import { useParams } from 'react-router-dom';
import { useStockQuote } from '../api/getStockQuote';
import { Spinner } from '../../../components/Loading/Spinner';

const ONE_SECOND = 1000;

type CustomToolTipProps = {
    active: boolean;
    payload: any[];
    label: string;
};

type IQuoteData = {
    name: string;
    uv: number;
    currrentPRice: number;
    amt: string;
};

function CustomToolTip({ active, payload, label }: CustomToolTipProps) {
    if (active && payload && payload.length) {
        const [data] = payload;
        return (
            <div className="bg-primary-800 p-2 px-3 rounded-lg text-white opacity-90 ">
                <p className="text-xs font-thin">{label}</p>
                <p className="text-lg font-bold">$ {data.value}</p>
            </div>
        );
    }
}

export const Graph = () => {
    const { symbol } = useParams();
    const { data: quotes, isLoading } = useStockQuote({
        config: { refetchInterval: ONE_SECOND * 30 },
        symbol: symbol || '',
    });

    if (isLoading)
        return (
            <div className="h-full flex justify-center content-center flex-wrap">
                <Spinner />
            </div>
        );
    if (R.isNil(quotes)) return null;

    const stockQuote =
        (!R.isNil(quotes.c) && !R.isEmpty(quotes.c) && quotes.c[quotes.c.length - 1].toFixed(2)) ||
        0;
    const formatQuotes = (quote: number, index: number) =>
        ({
            name: new Date(quotes.t[index] * 1000).toLocaleDateString(),
            uv: 0,
            currentPrice: quote.toFixed(2),
            amt: 0,
        } as unknown as IQuoteData);

    const quoteData = quotes.c?.map(formatQuotes) as unknown as IQuoteData[];

    return (
        <React.Fragment>
            <h3 className="text-primary-950 font-black uppercase text-2xl">$ {stockQuote}</h3>
            <div className="h-3/4">
                <ResponsiveContainer width="100%">
                    <AreaChart
                        width={100}
                        height={250}
                        data={quoteData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5783BC" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#5783BC" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            stroke="#b0c7e6"
                            tick={{
                                fill: '#3E5F8A',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                            tickLine={{ stroke: '#fffff' }}
                        />
                        <YAxis
                            stroke="#b0c7e6"
                            tick={{
                                fill: '#3E5F8A',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                            tickLine={{ stroke: '#fffff' }}
                        />
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip content={<CustomToolTip />} />

                        <Area
                            type="monotone"
                            dataKey="currentPrice"
                            stroke="#5384c4"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </React.Fragment>
    );
};
