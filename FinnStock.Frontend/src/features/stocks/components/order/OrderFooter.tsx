import React, { ReactNode } from 'react';

interface OrderFooterProps {
    children: ReactNode;
}
export const OrderFooter = ({ children }: OrderFooterProps) => {
    return <div className="grid grid-cols-2 gap-3 mt-auto">{children}</div>;
};
