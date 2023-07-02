import React, { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface OrderLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    url: string;
}
export const OrderLink = ({ url, content, ...rest }: OrderLinkProps) => {
    return (
        <Link
            to={url}
            className={twMerge(
                'col-span-2 text-center uppercase text-primary-900 border-solid bg-primary-50 border-primary-500 border hover:bg-primary-100 font-medium rounded text-sm px-5 py-2.5 mt-5 focus:outline-none',
                rest.className
            )}
            {...rest}
        >
            {content}
        </Link>
    );
};
