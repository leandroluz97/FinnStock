import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface OrderContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const OrderContent = ({ children, ...rest }: OrderContentProps) => {
    return (
        <section className={twMerge('h-full', rest.className)} {...rest}>
            {children}
        </section>
    );
};
