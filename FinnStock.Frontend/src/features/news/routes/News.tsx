import React from 'react';
import { ContentLayout } from '../../../components/Layout/ContentLayout';
import NewsList from '../components/NewsList';

export const News = () => {
    return (
        <ContentLayout title="news" description="">
            <div className="h-full flex flex-col justify-between overflow-hidden">
                <NewsList />
            </div>
        </ContentLayout>
    );
};
