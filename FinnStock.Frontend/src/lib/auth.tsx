import { Spinner } from '../components/Elements';
import { AuthProviderConfig, initReactQuery } from '../contexts/auth';
import { ConfirmEmailDto, confirmEmail } from '../features/auth/api/confirmEmail';
import { ForgotPasswordDto, forgotPassword } from '../features/auth/api/forgotPassword';
import { getUser, userDto } from '../features/auth/api/getUser';
import { LoginDto, login } from '../features/auth/api/login';
import { RegisterDto, register } from '../features/auth/api/register';
import { ResetPasswordDto } from '../features/auth/api/resetPassword';
import { TwoFactorDto, twoFactor } from '../features/auth/api/twoFactor';
import { AuthUser } from '../features/auth/types';
import { storageService } from '../utils/storage';

async function loadUser(data: userDto) {
    const response = await getUser(data);
    return response;
}

async function loginFn(data: LoginDto) {
    const response = await login(data);
    return response;
}

async function registerFn(data: RegisterDto) {
    const response = await register(data);
    return response;
}

async function confirmEmailFn(data: ConfirmEmailDto) {
    const response = await confirmEmail(data);
    return response;
}

async function forgotPasswordFn(data: ForgotPasswordDto) {
    const response = await forgotPassword(data);
    return response;
}

async function resetPasswordFn(data: ResetPasswordDto) {
    const response = await forgotPassword(data);
    return response;
}

async function twoFactorFn(data: TwoFactorDto) {
    const response = await twoFactor(data);
    return response;
}

async function logoutFn() {
    storageService.clearToken();
    window.location.assign(window.location.origin as unknown as string);
}

const authConfig: AuthProviderConfig<AuthUser, unknown> = {
    loadUser,
    loginFn,
    registerFn,
    confirmEmailFn,
    forgotPasswordFn,
    resetPasswordFn,
    twoFactorFn,
    logoutFn,
    LoaderComponent() {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Spinner />
            </div>
        );
    },
};

export const { AuthProvider, useAuth } = initReactQuery<
    AuthUser | null,
    unknown,
    LoginDto,
    RegisterDto,
    ConfirmEmailDto,
    TwoFactorDto,
    ForgotPasswordDto,
    ResetPasswordDto
>(authConfig);
