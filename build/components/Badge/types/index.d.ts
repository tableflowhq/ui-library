/// <reference types="react" />
export type BadgeVariant = "neutral" | "highlight" | "success" | "deep";
export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    variants?: BadgeVariant[];
};
export declare const badgeVariants: BadgeVariant[];
