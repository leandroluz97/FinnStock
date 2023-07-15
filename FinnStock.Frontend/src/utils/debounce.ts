export const debounce = (
    searchParams: string,
    fn: (a: URLSearchParams) => void,
    timeout: number
) => {
    let timer: NodeJS.Timeout;
    return ([name, value]: Array<string>) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const search = new URLSearchParams(searchParams);
            search.set(name, value);
            fn(search);
        }, timeout);
    };
};
