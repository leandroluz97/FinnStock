import React, { ReactNode } from 'react';
import { title } from 'process';
import finnstockLogo from '../../../assets/finnstock-white.svg';

interface IBannerProps {
    title: string;
    content: ReactNode;
}

export const Banner = ({ title, content }) => {
    return (
        <div className=" hidden md:block  flex-1 bg-primary-900 p-10 bg-logo-pattern bg-no-repeat bg-bottom bg-contain">
            <div>
                <img src={finnstockLogo} alt="finnstock" />
            </div>
            <div className="mt-16">
                <h1 className="text-white text-3xl font-medium pb-3">{title}</h1>
                <p className="text-primary-500 text-xl">{content}</p>
            </div>
        </div>
    );
};
