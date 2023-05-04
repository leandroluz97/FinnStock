import React from 'react';
import finnstockLogo from '../../../assets/finnstock-white.svg';

export const Banner = () => {
    return (
        <div className=" hidden md:block  flex-1 bg-primary-900 p-10 bg-logo-pattern bg-no-repeat bg-bottom bg-contain">
            <div>
                <img src={finnstockLogo} alt="finnstock" />
            </div>
            <div className="mt-16">
                <h1 className="text-white text-3xl font-medium pb-3">Welcome Back!</h1>
                <p className="text-primary-500 text-xl">
                    Contrary to popular belief, Lorem Ipsum <br /> is not simply random text.
                </p>
            </div>
        </div>
    );
};
