import React from 'react';
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
            {/* <Route path="/auth/*"> */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="two-factor-validation" element={<Twofactor />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
            {/* <Navigate to="/login" replace /> */}
            {/* </Route> */}
        </Routes>
    );
};
