import * as R from 'ramda';
import { Link, useParams } from 'react-router-dom';

import { useStockProfile } from '../api/getStockProfile';
import { useFavoriteStocks } from '../api/getFavoriteStocks';
import { useDeleteFavoriteStock } from '../api/deleteFavoriteStock';
import { useAddFavorite } from '../api/addFavoriteStock';

export const Header = () => {
    const { symbol, userId } = useParams<{ symbol: string; userId: string }>();
    const { data } = useStockProfile({ symbol: symbol as unknown as string });
    const { data: favorites } = useFavoriteStocks({ userId: userId as unknown as string });
    const deleteFavorite = useDeleteFavoriteStock({});
    const addFavorite = useAddFavorite({});

    if (R.isNil(data)) return null;
    if (R.isNil(favorites)) return null;

    const favorite = favorites.find((fav) => fav.symbol === symbol);
    const isFavorite = !R.isEmpty(favorites) ? !!favorite : false;

    const handleAddFavorite = async () => {
        await addFavorite.mutateAsync({
            data: {
                symbol: symbol as unknown as string,
                description: data.name,
                userId: userId as unknown as string,
            },
        });
    };
    const handleDeleteFavorite = async (favoriteId: string, id: string) => {
        await deleteFavorite.mutateAsync({ favoriteId, userId: id });
    };

    return (
        <header className="py-2">
            <div className="my-2 flex content-center">
                <h2 className="text-3xl font-extrabold text-primary-900">{data.name}</h2>
                <span className="bg-primary-500 text-primary-950 text-xs font-medium mx-2 px-2.5 py-0.5 rounded h-5 self-center">
                    {data.ticker}
                </span>
                {isFavorite ? (
                    <button
                        onClick={() => {
                            handleDeleteFavorite(favorite?.id as string, userId as string);
                        }}
                        type="button"
                        className="self-center border-l-2 text-xl border-primary-500 px-3 text-primary-900"
                    >
                        <span className="saturate-10 hover:saturate-100">🏅</span>
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            handleAddFavorite();
                        }}
                        type="button"
                        className="self-center border-l-2 text-xl border-primary-500 px-3 text-primary-900"
                    >
                        <span className="saturate-0 hover:saturate-100">🏅</span>
                    </button>
                )}
            </div>
            <div className="flex">
                <Link
                    target="_blank"
                    to={data.weburl}
                    className="self-center font-medium border-r-2 pr-2 border-primary-500 text-primary-900"
                >
                    Website
                </Link>
                <p className="self-center font-medium border-r-2 px-2 border-primary-500 text-primary-900">
                    phone: +{data.phone}
                </p>
                <p className="self-center font-medium border-r-2 px-2 border-primary-500 text-primary-900">
                    IPO: {new Intl.DateTimeFormat('en-US').format(new Date(data.ipo))}
                </p>
                <p className="self-center font-medium px-2 border-primary-500 text-primary-900">
                    Country: {data.country}
                </p>
            </div>
        </header>
    );
};
