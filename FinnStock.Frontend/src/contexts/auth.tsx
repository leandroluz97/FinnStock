import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    UseMutateAsyncFunction,
    QueryObserverResult,
    RefetchOptions,
} from 'react-query';

export interface AuthProviderConfig<User = unknown, Error = unknown> {
    key?: string;
    loadUser: (data: any) => Promise<User>;
    loginFn: (data: any) => Promise<User>;
    registerFn: (data: any) => Promise<User>;
    confirmEmailFn: (data: any) => Promise<User>;
    forgotPasswordFn: (data: any) => Promise<User>;
    resetPasswordFn: (data: any) => Promise<User>;
    twoFactorFn: (data: any) => Promise<User>;
    logoutFn: () => Promise<any>;
    LoaderComponent?: () => JSX.Element;
    ErrorComponent?: ({ error }: { error: Error | null }) => JSX.Element;
}

export interface AuthContextValue<
    User = unknown,
    Error = unknown,
    LoginCredentials = unknown,
    RegisterCredentials = unknown,
    ConfirmEmailCredentials = unknown,
    ForgotPasswordCredentials = unknown,
    ResetPasswordCredentials = unknown,
    TwoFactorCredentials = unknown
> {
    user: User | undefined;
    login: UseMutateAsyncFunction<User, any, LoginCredentials>;
    register: UseMutateAsyncFunction<User, any, RegisterCredentials>;
    confirmEmail: UseMutateAsyncFunction<User, any, ConfirmEmailCredentials>;
    twoFactor: UseMutateAsyncFunction<User, any, TwoFactorCredentials>;
    forgotPassword: UseMutateAsyncFunction<User, any, ForgotPasswordCredentials>;
    resetPassword: UseMutateAsyncFunction<User, any, ResetPasswordCredentials>;
    logout: UseMutateAsyncFunction<any, any, void, any>;
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isRegistering: boolean;
    refetchUser: (
        options?: RefetchOptions | undefined
    ) => Promise<QueryObserverResult<User, Error>>;
    error: Error | null;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export function initReactQuery<
    User = unknown,
    Error = unknown,
    LoginCredentials = unknown,
    RegisterCredentials = unknown,
    ConfirmEmailCredentials = unknown,
    TwoFactorCredentials = unknown,
    ForgotPasswordCredentials = unknown,
    ResetPasswordCredentials = unknown
>(config: AuthProviderConfig<User, Error>) {
    const AuthContext = React.createContext<AuthContextValue<
        User,
        Error,
        LoginCredentials,
        RegisterCredentials,
        ConfirmEmailCredentials,
        TwoFactorCredentials,
        ForgotPasswordCredentials,
        ResetPasswordCredentials
    > | null>(null);

    const {
        loadUser,
        loginFn,
        registerFn,
        confirmEmailFn,
        twoFactorFn,
        forgotPasswordFn,
        resetPasswordFn,
        logoutFn,
        LoaderComponent = () => <p>Loading...</p>,
        ErrorComponent = (error: any) => (
            <div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>
        ),
        key = 'user',
    } = config;

    function AuthProvider({ children }: AuthProviderProps) {
        const queryClient = useQueryClient();

        const {
            data: user,
            error,
            status,
            isLoading,
            isIdle,
            isSuccess,
            refetch,
        } = useQuery<User, Error>({ queryKey: key, queryFn: loadUser });

        const setUser = React.useCallback(
            (data: User) => queryClient.setQueryData(key, data),
            [queryClient]
        );

        const loginMutation = useMutation({
            mutationFn: loginFn,
            onSuccess: (user) => {
                //  setUser(user);
            },
        });

        const registerMutation = useMutation({
            mutationFn: registerFn,
            onSuccess: (user) => {
                //  setUser(user);
            },
        });

        const confirmEmailMutation = useMutation({
            mutationFn: confirmEmailFn,
            onSuccess: (user) => {
                //  setUser(user);
            },
        });

        const twoFactorMutation = useMutation({
            mutationFn: twoFactorFn,
            onSuccess: (user) => {
                setUser(user);
            },
        });

        const forgotPasswordMutation = useMutation({
            mutationFn: forgotPasswordFn,
            onSuccess: (user) => {
                //   setUser(user);
            },
        });

        const resetPasswordMutation = useMutation({
            mutationFn: resetPasswordFn,
            onSuccess: (user) => {
                //  setUser(user);
            },
        });

        const logoutMutation = useMutation({
            mutationFn: logoutFn,
            onSuccess: () => {
                queryClient.clear();
            },
        });

        const value = React.useMemo(
            () => ({
                user,
                error,
                refetchUser: refetch,

                login: loginMutation.mutateAsync,
                isLoggingIn: loginMutation.isLoading,

                register: registerMutation.mutateAsync,
                isRegistering: registerMutation.isLoading,
                isSuccess: registerMutation.isSuccess,

                confirmEmail: confirmEmailMutation.mutateAsync,
                isConfirmingEmail: confirmEmailMutation.isLoading,

                twoFactor: twoFactorMutation.mutateAsync,
                isTwoFactor: twoFactorMutation.isLoading,

                forgotPassword: forgotPasswordMutation.mutateAsync,
                isForgotingPassword: forgotPasswordMutation.isLoading,

                resetPassword: resetPasswordMutation.mutateAsync,
                isResetingPassword: resetPasswordMutation.isLoading,

                logout: logoutMutation.mutateAsync,
                isLoggingOut: logoutMutation.isLoading,
            }),
            [
                user,
                error,
                refetch,
                loginMutation.mutateAsync,
                loginMutation.isLoading,
                registerMutation.mutateAsync,
                registerMutation.isLoading,
                registerMutation.isSuccess,
                confirmEmailMutation.mutateAsync,
                confirmEmailMutation.isLoading,
                twoFactorMutation.mutateAsync,
                twoFactorMutation.isLoading,
                forgotPasswordMutation.mutateAsync,
                forgotPasswordMutation.isLoading,
                resetPasswordMutation.mutateAsync,
                resetPasswordMutation.isLoading,
                logoutMutation.mutateAsync,
                logoutMutation.isLoading,
            ]
        );

        if (isLoading || isIdle) {
            return <LoaderComponent />;
        }

        if (error) {
            return <ErrorComponent error={error} />;
        }

        if (isSuccess) {
            return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
        }

        return <div>Unhandled status: {status}</div>;
    }

    function useAuth() {
        const context = React.useContext(AuthContext);
        if (!context) {
            throw new Error(`useAuth must be used within an AuthProvider`);
        }
        return context;
    }

    return { AuthProvider, useAuth };
}
