/// <reference types="react" />
import { DialogItem } from "./types";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    variants?: import("../Button/types").buttonVariant[] | undefined;
    icon?: any;
    iconPosition?: "left" | "right" | undefined;
} & {
    items: DialogItem[];
    dialogPosition?: "left" | "right" | undefined;
    useActiveAsLabel?: boolean | undefined;
}>;
export default _default;
export declare const Dialog: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    variants?: import("../Button/types").buttonVariant[] | undefined;
    icon?: any;
    iconPosition?: "left" | "right" | undefined;
} & {
    items: DialogItem[];
    dialogPosition?: "left" | "right" | undefined;
    useActiveAsLabel?: boolean | undefined;
}>;
