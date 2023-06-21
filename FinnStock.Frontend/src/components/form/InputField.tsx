import React, { useState } from 'react';
import { IRegister } from '../../types';

interface IInputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    name: string;
    hasError: boolean;
    errorMessage: string;
    groupFormClassList: string;
    type: string;
    register: IRegister<HTMLInputElement>;
}
export const InputField = ({
    id,
    label,
    hasError,
    errorMessage,
    groupFormClassList,
    register,
    ...inputProps
}: IInputFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
    let classList = hasError
        ? 'bg-red-50 border-red-200 border-2 text-red-700 text-sm rounded focus:ring-red-100 focus:ring-2 focus:border-red-600 focus:border-2 block w-full p-2.5 placeholder-red-400'
        : 'bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 block w-full p-2.5 placeholder-primary-400';

    classList = inputProps.type === 'password' ? `${classList} pr-10` : classList;

    return (
        <div className={groupFormClassList}>
            <label htmlFor={id} className="block mb-1 text-sm font-medium text-primary-950">
                {label}
            </label>
            <input
                {...inputProps}
                id={id}
                className={classList}
                {...register}
                type={showPassword === false ? inputProps.type : 'text'}
            />
            {hasError && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">{errorMessage}</p>
            )}
            {groupFormClassList.includes('relative') && (
                <button
                    onClick={() => {
                        setShowPassword((show) => !show);
                    }}
                    type="button"
                    className={`absolute  right-0 p-2.5 text-sm font-medium text-white rounded-r${
                        hasError ? ' bottom-6' : ' bottom-0'
                    }`}
                >
                    <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.544 9.04498C20.848 9.4713 21 9.68447 21 10C21 10.3155 20.848 10.5287 20.544 10.955C19.1779 12.8706 15.6892 17 11 17C6.31078 17 2.8221 12.8706 1.45604 10.955C1.15201 10.5287 1 10.3155 1 10C1 9.68447 1.15201 9.47131 1.45604 9.04499C2.8221 7.12944 6.31078 3 11 3C15.6892 3 19.1779 7.12944 20.544 9.04498Z"
                            stroke={hasError ? '#fca5a5' : '#BCD1EB'}
                            strokeWidth="1.5"
                        />
                        <path
                            d="M14.0005 10C14.0005 8.34315 12.6573 7 11.0005 7C9.34363 7 8.00049 8.34315 8.00049 10C8.00049 11.6569 9.34363 13 11.0005 13C12.6573 13 14.0005 11.6569 14.0005 10Z"
                            stroke={hasError ? '#fca5a5' : '#BCD1EB'}
                            strokeWidth="1.5"
                        />
                        {!showPassword && (
                            <path
                                d="M20 1L2 19"
                                stroke={hasError ? '#fca5a5' : '#BCD1EB'}
                                strokeWidth="1.5"
                            />
                        )}
                    </svg>
                </button>
            )}
        </div>
    );
};
