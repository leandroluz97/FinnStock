import React, { ReactNode } from 'react';

interface OrderRootProps {
    children: ReactNode;
}

export const OrderRoot = ({ children }: OrderRootProps) => {
    return <div className="">{children}</div>;
};
