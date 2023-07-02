import React, { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MetricIconProps extends HTMLAttributes<HTMLOrSVGElement> {
    Icon: ElementType;
}

export const MetricIcon = ({ Icon, ...rest }: MetricIconProps) => {
    return (
        // <div className="bg-primary-500 flex flex-col justify-center content-center w-12 h-12 text-primary-800 text-xs font-medium flex-wrap rounded">
        <Icon
            className={twMerge('w-12 bg-primary-500 p-3 text-primary-800 rounded', rest.className)}
        />
        // </div>
    );
};
