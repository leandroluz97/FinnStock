import { ReactNode } from 'react';
import { Banner } from './Banner';
import finnstockPrimaryLogo from '../../../assets/finnstock-primary.svg';

interface LayoutProps {
    children: ReactNode;
    title: string;
    content: ReactNode;
}
export const Layout = ({ children, title, content }: LayoutProps) => {
    return (
        <div className="h-screen">
            <div className="flex h-full">
                <Banner title={title} content={content} />
                <div className="flex-1 overflow-y-scroll md:overflow-auto bg-white">
                    <div className="container h-full flex flex-col justify-center align-middle max-w-lg m-auto p-5 md:p-10">
                        <section className="my-5">
                            <div className="bg-white text-center md:hidden p-2 mb-2 sticky top-0 left-0 right-0 ">
                                <img
                                    src={finnstockPrimaryLogo}
                                    alt="finnstock"
                                    className="m-auto w-4/6"
                                />
                            </div>

                            {children}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
