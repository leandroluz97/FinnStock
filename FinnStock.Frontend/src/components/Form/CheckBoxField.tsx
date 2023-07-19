import { ReactNode } from 'react';
import { IRegister } from '../../types/formTypes';

interface ICheckBoxFieldProps {
    children: ReactNode;
    id: string;
    hasError: boolean;
    groupFormClassList: string;
    register: IRegister<HTMLInputElement>;
}

export const CheckBoxField = ({
    children,
    id,
    hasError,
    groupFormClassList,
    register,
}: ICheckBoxFieldProps) => {
    const classList = hasError
        ? 'w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-600'
        : 'w-4 h-4 text-primary-900 bg-primary-100 border-primary-300 rounded focus:ring-primary-900';

    return (
        <div className={groupFormClassList}>
            <input id={id} type="checkbox" className={classList} {...register} />
            {children}
        </div>
    );
};
