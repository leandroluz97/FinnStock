import React from 'react';
import { Card } from './Card';

export const StocksList = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            {items.map((item) => (
                <Card currency="USD" description="Microsoft" symbol="MSDT" />
            ))}
        </div>
    );
};
