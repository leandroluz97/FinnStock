import React from 'react';
import { Layout } from '../components/Layout';
import { ConfirmEmailForm } from '../components/ConfirmEmailForm';

export const ConfirmEmail = () => {
    return (
        <Layout
            title="Congratulations!"
            content={
                <React.Fragment>
                    Your account setup is complete. You can now enjoy all <br />
                    the benefits and features of our platform.
                </React.Fragment>
            }
        >
            <ConfirmEmailForm />
        </Layout>
    );
};
