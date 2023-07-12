import { Routes, Route, Navigate } from 'react-router-dom';
import { Signup } from './Signup';
import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { ConfirmEmail } from './ConfirmEmail';
import { ResetPassword } from './ResetPassword';
import { Twofactor } from './Twofactor';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="auth/signup" element={<Signup />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="auth/forgot-password" element={<ForgotPassword />} />
            <Route path="auth/confirm-email" element={<ConfirmEmail />} />
            <Route path="auth/reset-password" element={<ResetPassword />} />
            <Route path="auth/two-factor-validation" element={<Twofactor />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
    );
};
