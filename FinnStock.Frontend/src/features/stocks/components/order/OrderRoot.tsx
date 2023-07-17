import { ReactNode } from 'react';

interface OrderRootProps {
    children: ReactNode;
}

export const OrderRoot = ({ children }: OrderRootProps) => {
    return <div>{children}</div>;
};
