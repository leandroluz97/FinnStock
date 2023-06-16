export type Pagination<T> = {
    items: T[];
    totalPages: number;
    pageSize: number;
    pageNumber: number;
};

export type Page = Omit<Pagination<unknown>, 'items' | 'totalPages'>;
