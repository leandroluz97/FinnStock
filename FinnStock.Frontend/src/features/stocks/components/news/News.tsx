import React from 'react';
import * as R from 'ramda';
import { Link, useParams } from 'react-router-dom';
import { useNewsBySymbol } from '../../../news/api/getNewsBySymbol';

export const News = () => {
    const { symbol } = useParams();
    const { data } = useNewsBySymbol({ symbol: symbol || '', pageNumber: 1, pageSize: 12 });

    if (R.isNil(data)) return null;

    return (
        <React.Fragment>
            <h3 className="text-primary-950 font-black uppercase text-sm">Recent News</h3>
            <section className="grid grid-cols-4 gap-3">
                {data.items.map((news) => {
                    const milliseconds = parseInt(news.datetime?.toString().padEnd(13, '0'), 10);
                    return (
                        <Link
                            key={news.id}
                            to={news.url}
                            target="_blank"
                            className="flex mt-3 bg-slate-100 rounded cursor-pointer"
                        >
                            <img
                                src={news.image}
                                alt=""
                                srcSet=""
                                className="rounded-l w-20 max-w-lg object-cover"
                            />
                            <div className="overflow-hidden ml-1 p-2">
                                <h5 className="text-primary-950 text-sm font-black uppercase line-clamp-2 leading-5">
                                    {news.headline}
                                </h5>
                                <p className="text-xs text-slate-400 italic">
                                    {new Intl.DateTimeFormat('en-US').format(
                                        new Date(milliseconds)
                                    )}
                                </p>
                                <p className="text-xs text-slate-400 pt-2">
                                    <span className="text-slate-600 font-medium ">
                                        {news.category.toUpperCase()}
                                    </span>
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </React.Fragment>
    );
};
