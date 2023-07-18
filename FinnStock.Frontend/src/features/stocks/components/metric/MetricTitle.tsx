import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MetricTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    title: string;
}
export const MetricTitle = ({ title, ...rest }: MetricTitleProps) => {
    return (
        <h3 className={twMerge('text-primary-950 font-black uppercase', rest.className)}>
            {title}
        </h3>
    );
};
