const KEY = '__finnstock_token';

export const storageService = {
    getToken: () => sessionStorage.getItem(KEY),
    setToken: (token: string) => sessionStorage.setItem(KEY, token),
    clearToken: () => sessionStorage.removeItem(KEY),
};
