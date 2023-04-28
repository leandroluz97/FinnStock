import React from 'react';

interface IInputFieldProps {
    id: string;
    name: string;
    label: string;
    hasError: boolean;
    errorMessage: string;
    type: string;
    placeholder: string;
    isRequired: boolean;
    groupFormClassList: string;
}
export const InputField = ({
    id,
    name,
    label,
    hasError,
    errorMessage,
    type,
    placeholder,
    isRequired,
    groupFormClassList,
}: IInputFieldProps) => {
    const classList = hasError
        ? 'bg-red-50 border-red-200 border-2 text-red-700 text-sm rounded focus:ring-red-100 focus:ring-2 focus:border-red-600 focus:border-2 block w-full p-2.5 placeholder-red-400'
        : 'bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400';

    return (
        <div className={groupFormClassList}>
            <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-primary-950">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={classList}
                placeholder={placeholder}
                required={isRequired}
            />
            {hasError && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">{errorMessage}</p>
            )}
        </div>
    );
};
