interface IQuery {
    searchText: string;
    pageSize: string;
    pageNumber: string;
    sortBy: string;
    sortDesc: string;
}

type IEntries = 'pageSize' | 'searchText' | 'pageNumber' | 'sortBy' | 'sortDesc';

export const urlQueries: IEntries[] = [
    'searchText',
    'pageSize',
    'pageNumber',
    'sortBy',
    'sortDesc',
];

export class URLSearch {
    static #entries: IEntries[];

    private static searchParams: URLSearchParams;

    static register(entries: IEntries[]) {
        if (!Array.isArray(entries)) {
            throw new Error(
                `Registered 'queries ${entries}' is not an array of strings. Eg.: ["sortBy", "sortDesc", "status" ]`
            );
        }
        this.#entries = entries;
    }

    static querySearchParams(): string {
        return window.location.search;
    }

    static queries(): IQuery {
        this.#getQueries();
        const queries: IQuery = {} as IQuery;
        this.#entries.forEach((entry: IEntries) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            queries[entry] = this[entry] as unknown as IEntries;
        });
        return queries;
    }

    static #getQueries() {
        this.searchParams = new URLSearchParams(window.location.search);
        this.#entries.forEach((entry: IEntries) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this[entry] = this.searchParams.get(entry);
        });
    }

    static set(entries: Record<string, string>): string {
        const url = new URL(window.location.href);
        Object.entries(entries).forEach(([key, value]) => url.searchParams.set(key, value));
        return url.toString();
    }

    static delete(entries: string[]): string {
        const url = new URL(window.location.href);
        entries.forEach((entry) => url.searchParams.delete(entry));
        return url.toString();
    }

    static reset({
        remove,
        initial,
    }: {
        remove: string[];
        initial: Record<string, string>;
    }): string {
        const url = new URL(window.location.href);
        if (remove) this.#exclude(url, remove);
        if (initial) this.#setInitial(url, initial);
        return url.toString();
    }

    static #exclude(url: URL, entriesToDelete: string[]) {
        entriesToDelete.forEach((entry) => url.searchParams.delete(entry));
    }

    static #setInitial(url: URL, entries: Record<string, string>) {
        Object.entries(entries).forEach(([key, value]) => url.searchParams.set(key, value));
    }
}
