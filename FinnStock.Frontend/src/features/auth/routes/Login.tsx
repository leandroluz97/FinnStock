import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
    return (
        <Layout
            title="Welcome Back!"
            content={
                <React.Fragment>
                    Sign in now to discover personalized content, manage your preferences, <br />
                    and connect with our vibrant community.
                    <br />
                    We're thrilled to have you back!
                </React.Fragment>
            }
        >
            <LoginForm />
        </Layout>
    );
};
