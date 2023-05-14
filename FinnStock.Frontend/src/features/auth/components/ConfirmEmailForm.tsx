import React from 'react';
import { NavLink } from 'react-router-dom';

export const ConfirmEmailForm = () => {
    return (
        <React.Fragment>
            <h2 className="text-3xl font-medium text-primary-900 mt-32 md:mt-6 my-6">
                Email confirmed!🎉🎉
            </h2>
            <p className="text-sm font-medium text-primary-700">
                Your email has been confirmed, now you can login to your account. Thank you for
                choosing our platform. We're thrilled to have you on board and look forward to
                serving you.
            </p>
            <div>
                <NavLink
                    to="/auth/login"
                    type="submit"
                    className=" my-4 text-center text-white w-full bg-primary-900 hover:bg-primary-950 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    Login
                </NavLink>
            </div>
        </React.Fragment>
    );
};
