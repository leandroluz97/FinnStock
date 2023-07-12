import { ContentLayout } from '../../../components/Layout/ContentLayout';
import { FavoriteStocksList } from '../components/FavoriteStocksList';

export const FavoriteStocks = () => {
    return (
        <ContentLayout title="Favorite Stocks" description="">
            <div className="h-full flex flex-col justify-between overflow-hidden">
                <FavoriteStocksList />
            </div>
        </ContentLayout>
    );
};
