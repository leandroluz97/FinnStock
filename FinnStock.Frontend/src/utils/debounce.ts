export const debounce = (searchParams, fn, timeout) => {
    let timer;
    return ([name, value]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const search = new URLSearchParams(searchParams);
            search.set(name, value);
            fn(search);
        }, timeout);
    };
};
