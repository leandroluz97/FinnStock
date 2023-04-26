import React from 'react';
import finnstockLogo from '../assets/finnstock-white.svg';

export const AppRoutes = () => {
    // throw Error('error');
    return (
        <div className="bg-slate-700 h-full">
            <div className="flex h-full">
                <div className="flex-1">
                    <div>
                        <img src={finnstockLogo} alt="finnstock" />
                    </div>
                    <div>
                        <h1 className="text-gray-500">Welcome Back</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                </div>
                <div className="flex-1  bg-sky-500">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    );
};

export default AppRoutes;
