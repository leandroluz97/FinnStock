import React from 'react';
import { Pagination } from '../../../components/Elements/Pagination';
import { useNews } from '../api/getNews';
import { usePagination } from '../../../hooks/usePagination';
import { Spinner } from '../../../components/Loading';
import { Card } from './Card';
import { EmptyState } from '../../../components/States/EmptyState';

const NewsList = () => {
    const { pageNumber, pageSize } = usePagination();
    const { data, isLoading } = useNews({ pageSize, pageNumber });
    const items = data?.items;

    console.log(pageNumber, pageSize);

    return (
        <React.Fragment>
            <div className="h-full overflow-hidden rounded-md">
                <div className="h-full overflow-auto">
                    {isLoading ? (
                        <div className="h-full flex flex-col justify-center items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                            {items != null && items.length !== 0
                                ? items.map((news) => (
                                      <Card
                                          key={news.id}
                                          category={news.category}
                                          datetime={news.datetime}
                                          headline={news.headline}
                                          id={news.id}
                                          image={news.image}
                                          related={news.related}
                                          source={news.source}
                                          summary={news.summary}
                                          url={news.url}
                                      />
                                  ))
                                : null}
                        </div>
                    )}
                    {items != null && items.length === 0 && <EmptyState />}
                </div>
            </div>
            <Pagination
                pageNumber={pageNumber}
                pageSize={pageSize}
                totalPages={data ? data.totalPages : 1}
            />
        </React.Fragment>
    );
};

export default NewsList;
