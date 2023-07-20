import React from 'react';
import codes from 'country-calling-code';

interface ICountryCodeProps {
    code: number;
    setCode: (code: number) => void;
    hasError: boolean;
}

export const CountryCode = ({ code, setCode, hasError }: ICountryCodeProps) => {
    return (
        <React.Fragment>
            <div>
                <p className="block mb-1 text-sm font-medium text-primary-950">Code</p>
                <button
                    data-dropdown-offset-distance="-100"
                    data-dropdown-offset-skidding="130"
                    data-dropdown-placement="right"
                    id="dropdownUsersButton"
                    data-dropdown-toggle="dropdownUsers"
                    // data-dropdown-placement="bottom"
                    className="flex self-end gap bg-primary-50 border-primary-200 border-2 text-primary-900 text-sm rounded focus:ring-primary-100 focus:ring-2 focus:border-primary-800 focus:border-2 w-full p-2.5 placeholder-primary-400"
                    type="button"
                >
                    {codes[code].isoCode2} (+{codes[code].countryCodes})
                    {/* (+{codes[code].countryCodes}) */}
                    <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {hasError && <p />}
            </div>
            <div
                id="dropdownUsers"
                className="z-10 w-80 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
                <ul
                    className="h-48 w-80 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUsersButton"
                >
                    {codes.map((code, index) => {
                        return (
                            <li
                                key={code.country}
                                onClick={() => {
                                    setCode(index);
                                }}
                            >
                                <button
                                    type="button"
                                    className="w-full flex text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    {code.country} (+{code.countryCodes})
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
};
