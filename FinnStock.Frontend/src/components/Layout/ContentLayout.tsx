import React, { ReactNode } from 'react';
import { Head } from '../Head/Head';

type ContentLayoutProps = {
    title: string;
    description: string;
    children: ReactNode;
};
export const ContentLayout = ({ title = '', description = '', children }: ContentLayoutProps) => {
    return (
        <React.Fragment>
            <Head title={title} description={description} />
            {children}
        </React.Fragment>
    );
};
