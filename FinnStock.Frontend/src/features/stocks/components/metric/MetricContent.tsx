import { HTMLAttributes } from 'react';

interface MetricContent extends HTMLAttributes<HTMLParagraphElement> {
    content: string;
}
export const MetricContent = ({ content }: MetricContent) => {
    return <p className="text-sm text-slate-500 ">{content}</p>;
};
