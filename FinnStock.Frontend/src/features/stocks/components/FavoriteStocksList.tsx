import * as R from 'ramda';
import { useParams } from 'react-router-dom';
import { Card } from './Card';
import { useFavoriteStocks } from '../api/getFavoriteStocks';
import { Spinner } from '../../../components/Loading/Spinner';
import { EmptyState } from '../../../components/States/EmptyState';

export const FavoriteStocksList = () => {
    const { userId } = useParams();
    const { data, isLoading } = useFavoriteStocks({ userId: userId || '' });

    return (
        <div className="h-full overflow-hidden rounded-md">
            <div className="h-full overflow-auto">
                {isLoading ? (
                    <div className="h-full flex flex-col justify-center items-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
                        {!R.isNil(data) && !R.isEmpty(data)
                            ? data.map((stock) => (
                                  <Card
                                      key={stock.symbol}
                                      description={stock.description}
                                      symbol={stock.symbol}
                                      type=""
                                      currency="USD"
                                  />
                              ))
                            : null}
                    </div>
                )}
                {R.isEmpty(data) && <EmptyState />}
            </div>
        </div>
    );
};
