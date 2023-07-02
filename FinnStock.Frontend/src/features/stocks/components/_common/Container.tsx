import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
    return <div {...rest}>{children}</div>;
};
