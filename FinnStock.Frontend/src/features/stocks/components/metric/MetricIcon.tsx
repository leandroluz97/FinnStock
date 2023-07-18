import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MetricIconProps extends HTMLAttributes<HTMLOrSVGElement> {
    Icon: ElementType;
}

export const MetricIcon = ({ Icon, ...rest }: MetricIconProps) => {
    return (
        <Icon
            className={twMerge('w-12 bg-primary-500 p-3 text-primary-800 rounded', rest.className)}
        />
    );
};
