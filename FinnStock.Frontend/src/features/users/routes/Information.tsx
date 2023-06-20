import React from 'react';
import { InformationForm } from '../components/InformationForm';
import { ContentLayout } from '../../../components/Layout/ContentLayout';

export const Information = () => {
    return (
        <ContentLayout title="news" description="">
            <div className="h-full flex flex-col justify-between overflow-y-scroll">
                <InformationForm />
            </div>
        </ContentLayout>
    );
};
