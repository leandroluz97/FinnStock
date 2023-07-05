import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { useStockQuote } from '../api/getStockQuote';

const data = [
    {
        name: '01/07/2023',
        uv: 2400,
        pv: 4000,
        amt: 2400,
    },
    {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    // {
    //     name: '',
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290,
    // },
    // {
    //     name: '',
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000,
    // },
    // {
    //     name: '',
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181,
    // },
    // {
    //     name: '',
    //     uv: 2390,
    //     pv: 3800,
    //     amt: 2500,
    // },
    // {
    //     name: '',
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100,
    // },
];

const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        return (
            <div className="bg-primary-800 p-2 px-3 rounded-lg text-white opacity-90 ">
                <p className="text-xs font-thin">{label}</p>
                <p className="text-lg font-bold">$ {data.value}</p>
            </div>
        );
    }
};
// pv = vertical
export const Graph = () => {
    const { symbol } = useParams();
    const { data: quote } = useStockQuote({ symbol });
    // const { data: quote } = useStockQuote({ symbol, config: { refetchInterval: 3000 } });

    let test = {
        c: [217.68, 221.03, 100, 120, 105, 200.89, 217.68, 221.03, 219.89, 217.68],
        h: [222.49, 221.5, 220.94, 222.49, 221.5, 220.94, 222.49, 221.5, 220.94, 222.49],
        l: [217.19, 217.1402, 218.83, 217.19, 217.1402, 218.83, 217.19, 217.1402, 218.83, 217.19],
        o: [221.03, 218.55, 220, 221.03, 218.55, 220, 221.03, 218.55, 220, 221.03],
        s: 'ok',
        t: [
            1569297600, 1569384000, 1569470400, 1569297600, 1569384000, 1569470400, 1569297600,
            1569384000, 1569470400, 1569297600,
        ],
        v: [
            33463820, 24018876, 20730608, 33463820, 24018876, 20730608, 33463820, 24018876,
            20730608, 33463820,
        ],
    };

    if (quote !== undefined) {
        // test = [
        //     { name: '', uv: 0, pv: quote?.o, amt: 1000 },
        //     { name: '', uv: 0, pv: quote?.c, amt: 1000 },
        // ];
        test = test.c.map((c, index) => ({
            name: new Date(test.t[index] * 1000).toLocaleDateString(),
            uv: '',
            pv: c,
            amt: 2,
        }));
    }

    // console.log(test);

    return (
        <React.Fragment>
            <h3 className="text-primary-950 font-black uppercase text-2xl">$ {quote?.c}</h3>
            <div className="h-3/4">
                <ResponsiveContainer width="100%">
                    <AreaChart
                        width={100}
                        height={250}
                        data={test}
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
                            dataKey="pv"
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
