import React from 'react';
import { Link } from 'react-router-dom';

import { News } from '../types';

type CardProps = {} & News;
export const Card = ({
    category,
    datetime,
    id,
    image,
    related,
    summary,
    url,
    source,
    headline,
}: CardProps) => {
    const milliseconds = parseInt(datetime?.toString().padEnd(13, '0'), 10);

    return (
        <Link
            to={url}
            target="_blank"
            className="bg-white p-4 rounded cursor-pointer hover:drop-shadow-lg max-w-xl"
        >
            <img src={image} alt={headline} className="rounded-t" />
            <div className="py-3">
                <span className="bg-gray-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {source}
                </span>
                <h3 className="text-primary-950 font-black uppercase mt-2">{headline}</h3>
                <p className="text-sm text-slate-400 italic">
                    {new Intl.DateTimeFormat('en-US').format(new Date(milliseconds))}
                </p>
            </div>
            <p className="text-xs text-slate-400 ">
                <span className="text-slate-600 font-medium">{category.toUpperCase()}</span>
            </p>
        </Link>
    );
};
