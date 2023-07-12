import { Link } from 'react-router-dom';

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
        <Link
            to={symbol}
            className="bg-white p-4 rounded cursor-pointer hover:drop-shadow-lg max-w-xl"
        >
            <span className="bg-gray-100 text-primary-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {symbol}
            </span>
            <div className="py-3">
                <h3 className="text-primary-950 font-black uppercase">{description}</h3>
                <p className="text-sm text-slate-400 italic">{type}</p>
            </div>
            <p className="text-xs text-slate-400 ">
                Currency: <span className="text-slate-600 font-medium">{currency}</span>
            </p>
        </Link>
    );
};
