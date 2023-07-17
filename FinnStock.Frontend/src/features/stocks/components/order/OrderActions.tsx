import { ReactNode } from 'react';

interface OrderActionsProps {
    children: ReactNode;
}
export const OrderActions = ({ children }: OrderActionsProps) => {
    return <div className="grid grid-cols-2 gap-3 mt-auto">{children}</div>;
};
