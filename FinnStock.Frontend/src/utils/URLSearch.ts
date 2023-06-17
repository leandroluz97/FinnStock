export const urlQueries = ['searchText', 'pageSize', 'pageNumber'];

export class URLSearch {
    static register(entries) {
        if (!Array.isArray(entries)) {
            throw new Error(
                `Registered 'queries ${entries}' is not an array of strings. Eg.: ["sortBy", "sortDesc", "status" ]`
            );
        }
        this._entries = entries;
    }

    static querySearchParams() {
        return window.location.search;
    }

    static queries() {
        this.#getQueries();
        const queries = {};
        this._entries.forEach((entry) => {
            queries[entry] = this[entry];
        });
        return queries;
    }

    static #getQueries() {
        this.searchParams = new URLSearchParams(window.location.search);
        this._entries.forEach((entry) => {
            this[entry] = this.searchParams.get(entry);
        });
    }

    static set(entries) {
        const url = new URL(window.location.href);
        Object.entries(entries).forEach(([key, value]) => url.searchParams.set(key, value));
        return url.toString();
    }

    static delete(entries) {
        const url = new URL(window.location.href);
        entries.forEach((entry) => url.searchParams.delete(entry));
        return url.toString();
    }

    static reset({ remove, inital }) {
        const url = new URL(window.location.href);
        if (remove) this.#exclude(url, remove);
        if (inital) this.#setInitial(url, inital);
        return url.toString();
    }

    static #exclude(url, entriesToDelete) {
        entriesToDelete.forEach((entry) => url.searchParams.delete(entry));
    }

    static #setInitial(url, entries) {
        Object.entries(entries).forEach(([key, value]) => url.searchParams.set(key, value));
    }
}
