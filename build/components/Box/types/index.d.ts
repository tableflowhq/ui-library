/// <reference types="react" />
export type BoxVariant = "fluid" | "mid" | "wide" | "space-l" | "space-mid" | "space-none";
export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
    variants?: ("fluid" | "mid" | "wide" | "space-l" | "space-mid" | "space-none")[];
};
export declare const boxVariants: BoxVariant[];
