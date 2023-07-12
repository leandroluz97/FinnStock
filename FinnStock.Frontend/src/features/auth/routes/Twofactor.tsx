import React from 'react';
import { Layout } from '../components/Layout';
import { TwoFactorForm } from '../components/TwoFactorForm';

export const Twofactor = () => {
    return (
        <Layout
            title="Welcome!"
            content={
                <React.Fragment>
                    Register now to unlock a world of exciting features <br /> and exclusive
                    benefits of the trading world.
                </React.Fragment>
            }
        >
            <TwoFactorForm />
        </Layout>
    );
};
