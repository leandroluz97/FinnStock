export const urlQueries: string[] = ['searchText', 'pageSize', 'pageNumber', 'sortBy', 'sortDesc'];

interface IQuery {
    searchText?: string;
    pageSize?: string;
    pageNumber?: string;
    sortBy?: string;
    sortDesc?: string;
}

export class URLSearch {
    static #entries: string[];

    private static searchParams: URLSearchParams;

    static register(entries: string[]) {
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
        this.#entries.forEach((entry: string) => {
            queries[entry] = this[entry];
        });
        return queries;
    }

    static #getQueries() {
        this.searchParams = new URLSearchParams(window.location.search);
        this.#entries.forEach((entry: string) => {
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
