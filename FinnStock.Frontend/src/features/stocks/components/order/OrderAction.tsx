import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type OrderActionProps = ButtonHTMLAttributes<HTMLButtonElement>;

const OrderAction = ({ content, ...rest }: OrderActionProps) => {
    return (
        <button
            type={rest.type || 'button'}
            className={twMerge(
                'col-span-1 uppercase flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5',
                rest.className
            )}
        >
            {content}
        </button>
    );
};

export default OrderAction;
