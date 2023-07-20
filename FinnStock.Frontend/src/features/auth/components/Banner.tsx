import { ReactNode } from 'react';
import finnstockLogo from '../../../assets/finnstock-white.svg';
import logo from '../../../assets/Logo-cut-xl-02.svg';

interface BannerProps {
    title: string;
    content: ReactNode;
}

export const Banner = ({ title, content }: BannerProps) => {
    return (
        <div
            className="hidden md:block flex-1 bg-primary-900 p-10 bg-no-repeat bg-bottom bg-contain"
            style={{ backgroundImage: `url("${logo}")` }}
        >
            <div>
                <img src={finnstockLogo} alt="finnstock" />
                {/* <img src={logo} alt="finnstock" /> */}
            </div>
            <div className="mt-16">
                <h1 className="text-white text-3xl font-medium pb-3">{title}</h1>
                <p className="text-primary-500 text-xl">{content}</p>
            </div>
        </div>
    );
};
