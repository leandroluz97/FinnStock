import * as R from 'ramda';
import { Link, useParams } from 'react-router-dom';

import { useStockProfile } from '../api/getStockProfile';
import { useFavoriteStocks } from '../api/getFavoriteStocks';
import { useDeleteFavoriteStock } from '../api/deleteFavoriteStock';
import { useAddFavorite } from '../api/addFavoriteStock';

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

export const Header = () => {
    const { symbol, userId } = useParams<{ symbol: string; userId: string }>();
    const { data, isLoading } = useStockProfile({ symbol });
    const { data: favorites, ...rest } = useFavoriteStocks({ userId });
    const deleteFavorite = useDeleteFavoriteStock({});
    const addFavorite = useAddFavorite({});

    if (R.isNil(data)) return null;
    if (R.isNil(favorites)) return null;

    const favorite = favorites.find((favorite) => favorite.symbol === symbol);
    const isFavorite = !R.isEmpty(favorites) ? !!favorite : false;

    const handleAddFavorite = async () => {
        await addFavorite.mutateAsync({
            data: { symbol, description: data.name, userId },
        });
    };
    const handleDeleteFavorite = async (favoriteId, userId) => {
        await deleteFavorite.mutateAsync({ favoriteId, userId });
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
                            handleDeleteFavorite(favorite?.id, userId);
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
