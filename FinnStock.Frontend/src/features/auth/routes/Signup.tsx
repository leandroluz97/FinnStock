import React from 'react';
import { Layout } from '../components/Layout';
import { SignupForm } from '../components/SignupForm';

export const Signup = () => {
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
            <SignupForm />
        </Layout>
    );
};
