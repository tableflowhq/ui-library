import { DataType } from "../Pagination/hooks/useSyncPagination";
export default function useSort(data: DataType, initialSortKey?: string, initialSortAsc?: boolean): {
    dataSorted: DataType;
    setSort: (sortKey: string, sortAsc: boolean) => void;
    sortKey: string;
    sortAsc: boolean;
};
