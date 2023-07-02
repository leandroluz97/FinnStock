import React, { ReactNode } from 'react';

interface MetricRootProps {
    children: ReactNode;
}
export const MetricRoot = ({ children }: MetricRootProps) => {
    return <div className="bg-white p-4 rounded max-w-xl">{children}</div>;
};
