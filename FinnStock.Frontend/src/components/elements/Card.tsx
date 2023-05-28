import React from 'react';

interface ICardProps {
    currency: string;
    description: string;
    displaySymbol: string;
    figi: string;
    symbol: string;
    type: string;
}

export const Card = ({ currency, description, displaySymbol, figi, symbol, type }: ICardProps) => {
    return (
        <div className="bg-white p-4 rounded cursor-pointer w-56 hover:drop-shadow-lg">
            <span className="bg-gray-100 text-primary-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {symbol}
            </span>
            <h3 className="text-primary-950 font-black uppercase py-3">{description}</h3>
            <p>{type}</p>
            <p className="text-xs text-slate-400">
                Currency: <span className="text-slate-600 font-medium">{currency}</span>
            </p>
        </div>
    );
};
