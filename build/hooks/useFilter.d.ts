/// <reference types="react" />
import { DataType } from "../types/global";
export default function useFilter(filterByColumns: string[], data: DataType): {
    dataFiltered: DataType;
    setFilter: import("react").Dispatch<import("react").SetStateAction<string>>;
};
