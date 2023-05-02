import { ChangeHandler } from 'react-hook-form';

export type IRegister<T> = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<T>;
    name: string;
};
