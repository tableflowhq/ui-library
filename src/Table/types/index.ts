import { PropsWithChildren, ReactElement } from "react";

type Style = { readonly [key: string]: string };

type Primitive = string | number | boolean | null | undefined;

export type TableComposite = {
    raw: Primitive;
    content: Primitive | React.ReactElement;
    tooltip?: string;
};

export type TableValue = Primitive | TableComposite;

export type TableDatum = {
    [key: string]: TableValue;
};

export type TableData = TableDatum[];

export type TableProps = {
    data: TableData;
    keyAsId?: string;
    theme?: Style;
    mergeThemes?: boolean;
    highlightColumns?: string[];
    hideColumns?: string[];
    emptyState?: ReactElement;
    heading?: ReactElement;
    background?: "zebra" | "dark" | "light";
    columnWidths?: string[];
    columnAlignments?: ("left" | "center" | "right" | "")[];
    fixHeader?: boolean;
};

export type RowProps = {
    datum: TableDatum;
    isHeading?: boolean;
};

export type CellProps = PropsWithChildren<{
    cellClass?: string;
    cellStyle: Style;
    tooltip?: string;
}>;
