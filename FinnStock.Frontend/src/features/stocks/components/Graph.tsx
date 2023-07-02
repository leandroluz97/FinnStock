import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '01/07/2023',
        uv: 4000,
        pv: 2400,
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
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomToolTip = (obe) => {
    return (
        <div className="bg-primary-800 p-2 px-3 rounded-lg text-white opacity-90 ">
            <p className="text-xs font-thin">22 March 2023</p>
            <p className="text-lg font-bold">$ 78,560</p>
        </div>
    );
};

export const Graph = () => {
    return (
        <React.Fragment>
            <h3 className="text-primary-950 font-black uppercase text-2xl">$ 78,560</h3>
            <div className="h-3/4">
                <ResponsiveContainer width="100%">
                    <AreaChart
                        width={100}
                        height={250}
                        data={data}
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
