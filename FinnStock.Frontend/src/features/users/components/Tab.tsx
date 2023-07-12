import { NavLink, useLocation } from 'react-router-dom';

export const Tab = () => {
    const { pathname } = useLocation();

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-2">
            <div className="h-full flex flex-wrap justify-center md:justify-between -mb-px border-b-2 border-primary-300">
                <div className=" flex flex-wrap justify-center md:justify-between">
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to=""
                            className={() =>
                                `inline-block p-4 pt-3 border-b-3 rounded-t-lg text-primary-800 ${
                                    pathname.endsWith('settings')
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                        >
                            Information
                        </NavLink>
                    </li>
                    <li className="mr-2 list-none relative">
                        <NavLink
                            to="change-password"
                            className={({ isActive }) =>
                                `inline-block p-4 pt-3 border-b-2 rounded-t-lg text-primary-800 ${
                                    isActive
                                        ? ' before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:right-0 before:md:bottom-0 before:md:rounded-t-lg '
                                        : ' border-transparent'
                                }`
                            }
                            aria-current="page"
                        >
                            Password Change
                        </NavLink>
                    </li>
                </div>
            </div>
        </div>
    );
};
