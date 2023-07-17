import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../../../../components/Loading/Spinner';

type OrderActionProps = ButtonHTMLAttributes<HTMLButtonElement>;

const OrderAction = ({ content, ...rest }: OrderActionProps) => {
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={rest.type || 'button'}
            {...rest}
            className={twMerge(
                'col-span-1 uppercase flex flex-row items-center justify-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5',
                rest.className
            )}
        >
            {content}
            {rest.disabled && (
                <span className="ml-2">
                    <Spinner />
                </span>
            )}
        </button>
    );
};

export default OrderAction;
