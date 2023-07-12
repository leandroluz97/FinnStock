import React from 'react';
import { Layout } from '../components/Layout';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm';

export const ForgotPassword = () => {
    return (
        <Layout
            title="Recover Password!"
            content={
                <React.Fragment>
                    If you've forgotten your password, don't worry. We've got you covered. <br />
                    Enter your email address below, and we'll send you a password reset link.
                </React.Fragment>
            }
        >
            <ForgotPasswordForm />
        </Layout>
    );
};
