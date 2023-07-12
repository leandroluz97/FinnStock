import { Layout } from '../components/Layout';
import { ResetPasswordForm } from '../components/ResetPasswordForm';

export const ResetPassword = () => {
    return (
        <Layout
            title="Create New Password!"
            content={
                <React.Fragment>
                    Make sure to choose a strong and secure password <br /> that is not easily
                    guessable.
                </React.Fragment>
            }
        >
            <ResetPasswordForm />
        </Layout>
    );
};
