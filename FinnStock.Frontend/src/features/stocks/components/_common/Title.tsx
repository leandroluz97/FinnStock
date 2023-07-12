interface TitleProps {
    title: string;
}
export const Title = ({ title }: TitleProps) => {
    return <h3 className="text-primary-950 font-black uppercase text-2xl">{title}</h3>;
};
