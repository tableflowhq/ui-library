export type BoxVariant = "fluid" | "mid" | "wide" | "space-l" | "space-mid" | "space-none";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  variants?: ("fluid" | "mid" | "wide" | "space-l" | "space-mid" | "space-none")[];
};

export const boxVariants: BoxVariant[] = ["fluid", "mid", "wide", "space-l", "space-mid", "space-none"];
