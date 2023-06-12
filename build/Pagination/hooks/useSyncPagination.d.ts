type Primitive = string | number | boolean | null | undefined;
export type DataType = {
    [key: string]: Primitive | Primitive[] | {
        [key: string]: Primitive;
    };
}[];
export default function useSyncPagination(data: DataType, itemsPerPage: number): {
    dataPage: {
        [key: string]: Primitive | {
            [key: string]: Primitive;
        } | Primitive[];
    }[];
    page: number;
    paginate: (newPage?: number) => void;
    totalItems: number;
};
export {};
